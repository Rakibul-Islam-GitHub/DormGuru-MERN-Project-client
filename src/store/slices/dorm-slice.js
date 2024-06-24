import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { publicRequest, userRequest } from '../../requestMethod';
import Swal from 'sweetalert2';

export const addDorm = createAsyncThunk(
    'dorm/adddorm',
    async (data, thunkAPI) => {
        const {formData,  setDormValue ,navigate}=data
      const abortController = new AbortController();
      const response = await userRequest.post("api/dorm/add", formData);
      
      if (response.status === 200) {
        Swal.fire({
          title: 'success!',
          text: 'Dorm added successfully',
          icon: 'success',
          confirmButtonText: 'ok'
      })  
              setDormValue({dormName:'', description:'', versityName:'', foundingYear:'', city:'', state:'', room:''} )
        navigate('/dashboard')
        return response.data
      }
      if (response.status !== 200) {
        abortController.abort();
        return thunkAPI.rejectWithValue('Failed to add dorm');
      }
  
    }
  );

  export const fetchDorm = createAsyncThunk(
    'dorm/fetchdorm',
    async (thunkAPI) => {
      const abortController = new AbortController();
      const response = await publicRequest.get("api/dorm");
      if (response.status === 200) {
        return response.data
      }
      if (response.status !== 200) {
        abortController.abort();
        return thunkAPI.rejectWithValue('Failed to add dorm');
      }
  
      return await response.data;
    }
  );

  export const editDorm = createAsyncThunk(
    'dorm/editdorm',
    async (data,thunkAPI) => {
 
        const {id, dormData, event, toggle } = data
      const abortController = new AbortController();
      const response = await userRequest.put(`api/dorm/update/${id}`,dormData);
      
      if (response.status === 200) {
        Swal.fire({
                          title: 'success!',
                          text: 'Dorm updated successfully',
                          icon: 'success',
                          confirmButtonText: 'ok'
                      })     
             toggle()
        event.target.reset()
        thunkAPI.dispatch(fetchDorm())
      }
      if (response.status !== 200) {
        abortController.abort();
        return thunkAPI.rejectWithValue('Failed to update');
      }
  
      return await response.data;
    }
  );
  export const deleteDorm= createAsyncThunk(
    'dorm/deletedorm',
    async (data,thunkAPI) => {
        const {id,toggleModal } = data
      const abortController = new AbortController();
      const response = await userRequest.delete(`api/dorm/delete/${id}`);
      if (response.status === 200) {
        Swal.fire({
          title: 'Deleted',
          text: 'Dorm deleted successfully',
          icon: 'error',
          confirmButtonText: 'ok'
      })     
        toggleModal()
        thunkAPI.dispatch(fetchDorm())
      }
      if (response.status !== 200) {
        abortController.abort();
        return thunkAPI.rejectWithValue('Failed to delete');
      }
  
      return await response.data;
    }
  );

  const dormSlice = createSlice({
    name: 'dorm',
    initialState: {
        status:"idle",
        error:null,
        dormData: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(addDorm.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(addDorm.fulfilled, (state, action) => {
            state.status = 'successful';
            state.dormData.unshift(action.payload);
            state.error=null

          })
          .addCase(addDorm.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          })
          .addCase(fetchDorm.fulfilled, (state, action) => {
            state.status = 'successful';
            state.dormData=action.payload;
            state.error=null
          })
          .addCase(fetchDorm.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          }) 
          .addCase(editDorm.fulfilled, (state, action) => {
            state.status = 'successful';
            state.error=null
          }) 
          .addCase(deleteDorm.fulfilled, (state, action) => {
            state.status = 'successful';
            state.error=null
          })
          .addCase(deleteDorm.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          })

      }
    
    
});


export default dormSlice.reducer;
