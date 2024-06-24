
import {  userRequest } from '../../requestMethod';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

  export const fetchUser = createAsyncThunk(
    'user/fetchuser',
    async (thunkAPI) => {
      const abortController = new AbortController();
      const response = await userRequest.get("api/user");
      if (response.status === 200) {
        
      }
      if (response.status !== 200) {
        abortController.abort();
        return thunkAPI.rejectWithValue('Failed to add user');
      }
  
      return await response.data;
    }
  );

  export const deleteUser = createAsyncThunk(
    'user/deleteuser',
    async (data,thunkAPI) => {
        const {id,toggleModal } = data
      const abortController = new AbortController();
      const response = await userRequest.delete(`api/user/delete/${id}`);
      if (response.status === 200) {
        alert("User deleted successfully!")
        toggleModal()
        thunkAPI.dispatch(fetchUser())
      }
      if (response.status !== 200) {
        abortController.abort();
        return thunkAPI.rejectWithValue('Failed to delete user');
      }
  
      return await response.data;
    }
  );

  export const editUser = createAsyncThunk(
    'user/edituser',
    async (data,thunkAPI) => {
        const {id, state,toggleModal } = data
      const abortController = new AbortController();
      const response = await userRequest.put(`api/user/update/${id}`,state);
      
      if (response.status === 200) {
        alert("User updated successfully!")
        toggleModal()
        thunkAPI.dispatch(fetchUser())
      }
      if (response.status !== 200) {
        abortController.abort();
        return thunkAPI.rejectWithValue('Failed to update user');
      }
  
      return await response.data;
    }
  );

const userSlice = createSlice({
    name: 'user',
    initialState: {
        status:"idle",
        error:null,
        userData: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder

          .addCase(fetchUser.fulfilled, (state, action) => {
            state.status = 'successful';
            state.userData=action.payload;
            state.error=null
          })
          .addCase(fetchUser.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          })  
           .addCase(deleteUser.fulfilled, (state, action) => {
            state.status = 'successful';
            state.error=null
          })
          .addCase(deleteUser.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          })


      }
    
    
});


export default userSlice.reducer;
