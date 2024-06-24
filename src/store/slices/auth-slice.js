
import { publicRequest, userRequest } from '../../requestMethod';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const registration = createAsyncThunk(
    'user/registration',
    async (data, thunkAPI) => {
      const {info, navigate} = data
      const abortController = new AbortController();
      const response = await publicRequest.post("api/user", info);
      if (response.status === 200) {
    
      
      if (response.data.message === 'Email is already used') {
        alert("Email is already used. You can login!")
        abortController.abort();
        return thunkAPI.rejectWithValue('Failed to register');

      }
      localStorage.setItem("token",response.data.token)
        localStorage.setItem('isAuthenticated', true)
        alert("You are now logged in!")
       navigate('/')
      }
      if (response.status !== 200) {
        abortController.abort();
        return thunkAPI.rejectWithValue('Failed to register');
      }
  
      return await response.data;
    }
  );

  export const login = createAsyncThunk(
    'user/login',
    async (data, thunkAPI) => {
      const {info, navigate} = data
      const abortController = new AbortController();
      const response = await publicRequest.post("api/user/login", info);
  
      if (response.status===200 || response.success) {
      
        localStorage.setItem("token",response.data.token)
        localStorage.setItem('isAuthenticated', true)
        alert("login successful")
        navigate('/')
        
      }else {
        abortController.abort();
        alert("Wrong email or password")
        return thunkAPI.rejectWithValue('Failed to login');
      }
  
      return await response.data;
    }
  );
  export const updateProfile = createAsyncThunk(
    'user/updateProfile',
    async (data, thunkAPI) => {
      
      const abortController = new AbortController();
      const response = await userRequest.put("api/user/profile/update", data);
     
      if (response.status === 200) {
      
        alert("Profile update successful!")
      }
      if (response.status !== 200) {
        abortController.abort();
        return thunkAPI.rejectWithValue('Failed to updat profile');
      }
  
      return await response.data;
    }
  );
  export const updateAddress = createAsyncThunk(
    'user/updateAddress',
    async (data, thunkAPI) => {
      
      const abortController = new AbortController();
      const response = await userRequest.put("api/user/profile/update", data);
      if (response.status !== 200) {
        abortController.abort();
        return thunkAPI.rejectWithValue('Failed to updat profile');
      }
  
      return await response.data;
    }
  );

  export const resetPassword = createAsyncThunk(
    'user/resetPassword',
    async (data, thunkAPI) => {
      const {email,toggleModal} = data


      const abortController = new AbortController();
      const response = await publicRequest.post("api/user/resetpassword", {email});
    
      if (response.status === 200) {
        if (response.data.success) {
          alert("Password reset successful. Please check your email!")
        toggleModal()
        
        }else{
          alert("User not found. Please check your email! Or signup new account!")
        }
      }
      if (response.status !== 200) {
        abortController.abort();
        alert("User not found. Please check your email! Or signup new account")
        return thunkAPI.rejectWithValue('Failed to login');
      }
  
      return await response.data;
    }
  );

const authSlice = createSlice({
    name: "auth",
    initialState: {
      isAuthenticated : localStorage.getItem('isAuthenticated')?localStorage.getItem('isAuthenticated'):false,
      myprofile:{phone:'', email:'', address:''},
      cookieConsent: localStorage.getItem('cookieNoticeShow')?localStorage.getItem('cookieNoticeShow'):false,
       status : "idle",
       error : null,

    },
    reducers: {
      logout(state, action) {

        localStorage.removeItem('isAuthenticated')
        localStorage.removeItem('token')
        state.isAuthenticated=false
        action.payload.navigate('/')
        alert("Logout successful");
    },
      cookieAccept(state, action) {

        localStorage.setItem("cookieNoticeShow",true)
        state.cookieConsent= true
    },
     },

    extraReducers: {
      [registration.pending]: (state, action) => {
        // When data is being fetched
        state.status = 'loading'
      },
      [registration.fulfilled]: (state, action) => {
        // When data is fetched successfully
        state.status = 'successful'
        state.myprofile= action.payload
        state.isAuthenticated = true
        // Concatenate the new data to the existing data in the array
      },
      [registration.rejected]: (state, action) => {
        // When data is fetched unsuccessfully
        state.status = 'failed'
  
        // Update the error message for proper error handling
        state.error = action.error.message
      },   
      [login.pending]: (state, action) => {
        // When data is being fetched
        state.status = 'loading'
      },
      [login.fulfilled]: (state, action) => {
        // When data is fetched successfully
        state.status = 'successful'
        state.myprofile= action.payload
        state.isAuthenticated = true
  
        // Concatenate the new data to the existing data in the array
        // state.postItems = state.postItems.concat(action.payload)
      },

      [updateProfile.fulfilled]: (state, action) => {
        // When data is fetched successfully
        state.status = 'successful'
        state.myprofile= action.payload
        
      },
      [updateAddress.fulfilled]: (state, action) => {
        // When data is fetched successfully
        state.status = 'successful'
        state.myprofile= action.payload
        
      },
      [login.rejected]: (state, action) => {
        // When data is fetched unsuccessfully
        alert('Wrong email or password')
        state.status = 'failed'
  
        // Update the error message for proper error handling
        state.error = action.error.message
      },   
    }
  })
    
  export const { logout,cookieAccept } = authSlice.actions;
export default authSlice.reducer;
