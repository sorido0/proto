


import { createSlice } from '@reduxjs/toolkit'
export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking',
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMensaje: null,
       

    },
    reducers: {
        login: ( state , {payload} ) => {
            state.status = 'si-login';
            state.uid = payload.uid
            state.email = payload.email
            state.displayName = payload.displayName
            state.photoURL = payload.photoURL
            state.errorMensaje = null
           
        },
        logout: (state, {payload} ) => {
            state.status = 'no-login';
            state.uid = null
            state.email = null
            state.displayName = null
            state.photoURL = null
            state.errorMensaje = null
           // console.log({payload})
        },
        verificandoCredentials: ( state ) => {
            state.status = 'verificando-login'
        },
       
    }
})
// Action creators are generated for each case reducer function
export const {  login, logout, verificandoCredentials  } = authSlice.actions