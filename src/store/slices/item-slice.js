
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { publicRequest, userRequest } from '../../requestMethod';


export const addItem = createAsyncThunk(
    'user/additem',
    async (data, thunkAPI) => {
        const {formData, toggleModal, setState}=data
      const abortController = new AbortController();
      const response = await userRequest.post("api/item/add", formData);
      
      if (response.status === 200) {
        alert("Item added successfully!")
        toggleModal()
        setState({title:'', description:'', price:'',weight:'', dimension:'', material:'',  stock:'', category:''} )
        return response.data
      }
      if (response.status !== 200) {
        abortController.abort();
        return thunkAPI.rejectWithValue('Failed to add item');
      }
  
    }
  );

  export const fetchItem = createAsyncThunk(
    'user/fetchitem',
    async (thunkAPI) => {
      const abortController = new AbortController();
      const response = await publicRequest.get("api/item");
      if (response.status === 200) {
        
      }
      if (response.status !== 200) {
        abortController.abort();
        return thunkAPI.rejectWithValue('Failed to add item');
      }
  
      return await response.data;
    }
  );

  export const deleteItem = createAsyncThunk(
    'user/deleteitem',
    async (data,thunkAPI) => {
        const {id,toggleModal } = data
      const abortController = new AbortController();
      const response = await userRequest.delete(`api/item/delete/${id}`);
      if (response.status === 200) {
        alert("Item deleted successfully!")
        toggleModal()
        thunkAPI.dispatch(fetchItem())
      }
      if (response.status !== 200) {
        abortController.abort();
        return thunkAPI.rejectWithValue('Failed to delete item');
      }
  
      return await response.data;
    }
  );

  export const editItem = createAsyncThunk(
    'user/edititem',
    async (data,thunkAPI) => {
        const {id, state,toggleModal } = data
      const abortController = new AbortController();
      const response = await userRequest.put(`api/item/update/${id}`,state);
      
      if (response.status === 200) {
        alert("Item updated successfully!")
        toggleModal()
        thunkAPI.dispatch(fetchItem())
      }
      if (response.status !== 200) {
        abortController.abort();
        return thunkAPI.rejectWithValue('Failed to update item');
      }
  
      return await response.data;
    }
  );

const itemSlice = createSlice({
    name: 'item',
    initialState: {
        status:"idle",
        error:null,
        itemData: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(addItem.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(addItem.fulfilled, (state, action) => {
            state.status = 'successful';
            state.itemData.unshift(action.payload);
            state.error=null

          })
          .addCase(addItem.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          })
          .addCase(fetchItem.fulfilled, (state, action) => {
            state.status = 'successful';
            state.itemData=action.payload;
            state.error=null
          })
          .addCase(fetchItem.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          })  
           .addCase(deleteItem.fulfilled, (state, action) => {
            state.status = 'successful';
            state.error=null
          })
          .addCase(deleteItem.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          })


      }
    
    
});


export default itemSlice.reducer;
