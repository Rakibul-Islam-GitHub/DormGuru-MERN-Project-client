
import { publicRequest, userRequest } from '../../requestMethod';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const addReview = createAsyncThunk(
    'user/addreview',
    async (data, thunkAPI) => {
        const {state, toggle}=data
      const abortController = new AbortController();
      const response = await userRequest.post("api/review/add", state);
      
      if (response.status === 200) {
        Swal.fire({
          title: 'success!',
          text: 'Review added successfully',
          icon: 'success',
          confirmButtonText: 'ok'
      })  
              toggle()
        return response.data
      }
      if (response.status !== 200) {
        abortController.abort();
        return thunkAPI.rejectWithValue('Failed to add review');
      }
  
    }
  );

  export const fetchReview = createAsyncThunk(
    'user/fetchreview',
    async (thunkAPI) => {
      const abortController = new AbortController();
      const response = await publicRequest.get("api/review");
      if (response.status === 200) {
        
      }
      if (response.status !== 200) {
        abortController.abort();
        return thunkAPI.rejectWithValue('Failed to add review');
      }
  
      return await response.data;
    }
  );

  export const deleteReview = createAsyncThunk(
    'user/deletereview',
    async (data,thunkAPI) => {
        const {id,toggleModal } = data
      const abortController = new AbortController();
      const response = await userRequest.delete(`api/review/delete/${id}`);
      if (response.status === 200) {
        alert("Review deleted successfully!")
        toggleModal()
        thunkAPI.dispatch(fetchReview())
      }
      if (response.status !== 200) {
        abortController.abort();
        return thunkAPI.rejectWithValue('Failed to delete review');
      }
  
      return await response.data;
    }
  );

  export const editReview = createAsyncThunk(
    'user/editreview',
    async (data,thunkAPI) => {
        const {id, state,toggleModal } = data
      const abortController = new AbortController();
      const response = await userRequest.put(`api/review/update/${id}`,state);
      
      if (response.status === 200) {
        alert("Review updated successfully!")
        toggleModal()
        thunkAPI.dispatch(fetchReview())
      }
      if (response.status !== 200) {
        abortController.abort();
        return thunkAPI.rejectWithValue('Failed to update review');
      }
  
      return await response.data;
    }
  );

const reviewSlice = createSlice({
    name: 'review',
    initialState: {
        status:"idle",
        error:null,
        reviewData: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(addReview.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(addReview.fulfilled, (state, action) => {
            state.status = 'successful';
            state.error=null

          })
          .addCase(addReview.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          })
          .addCase(fetchReview.fulfilled, (state, action) => {
            state.status = 'successful';
            state.reviewData=action.payload;
            state.error=null
          })
          .addCase(fetchReview.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          })  
           .addCase(deleteReview.fulfilled, (state, action) => {
            state.status = 'successful';
            state.error=null
          })
          .addCase(deleteReview.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          })


      }
    
    
});


export default reviewSlice.reducer;
