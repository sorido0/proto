

import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from './auth';
import { elDiarioSlice } from "./eldiario";

export const store = configureStore({
    reducer: {
        // Aqui van mis reducers


        auth:  authSlice.reducer,
        elDiario: elDiarioSlice.reducer,



        
    },
});
