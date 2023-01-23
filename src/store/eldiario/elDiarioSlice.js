


import { createSlice } from '@reduxjs/toolkit'
export const elDiarioSlice = createSlice({
    name: 'elDiario',
    initialState: {
        seGuardo: false,
        mensajeGuardaro: '',
        nota: [],
        NotaActiva: null,
        // Notaactiva: {
        //     id: '',
        //     titulo: '',
        //     descripcion: '',
        //     fecha: 1234567890,
        //     imageUrls: [],
        // }


    },
    reducers: {
        anadirNuevaNotaBasia: (state, action) => {
            state.nota.push(action.payload)
            state.seGuardo = false;
        },

        obtenerNotaActiva: (state, action) => {
            state.NotaActiva = action.payload;
            state.mensajeGuardaro = ""
        },

        notaObtenida: (state, action) => {
            state.nota = action.payload
        },

        seEstaGuardando: (state, action) => {
            state.seGuardo = true;
            state.mensajeGuardaro = "";
        },
       
        guardandoNota: (state, action) => {
            state.seGuardo = action.payload
        },

        actulizarNota: (state, action) => {
            state.seGuardo = false;
            state.nota = state.nota.map(nota => {

                if (nota.id === action.payload.id) {
                    return action.payload
                } 
                
                return nota
                
            })
            //console.log("pase mmg")
            state.mensajeGuardaro = "Se Actulizo la nota"
        },
        // agregar imagen a la nota
        agregarImagen: (state, action) => {

            state.NotaActiva.imageUrl = [ ...state.NotaActiva.imageUrl, ...action.payload]
            state.seGuardo = false;
        },
        // eliminar imagen de la nota
        // eliminarImagen: (state, action) => {
        //     state.NotaActiva.imageUrl = state.NotaActiva.imageUrl.filter(url => url !== action.payload)
        //     state.seGuardo = false;
        // },
        
        // limpiar reducer de elDiario al salir de la pagina
        limpiarElDiario: (state, action) => {
            state.seGuardo = false;
            state.mensajeGuardaro = '';
            state.nota = [];
            state.NotaActiva = null;
        },
        elminarNotaPorId: (state, action) => {
            console.log("estube aqui")
            state.nota = state.nota.filter(nota => nota.id !== action.payload)
            // state.seGuardo = false;
            // state.mensajeGuardaro = '';
            // state.nota = [];
            state.NotaActiva = null;
        },
    }


})


// Action creators are generated for each case reducer function
export const {

    actulizarNota,
    
    anadirNuevaNotaBasia,
    
    elminarNotaPorId,
    
    guardandoNota,
    
    notaObtenida,
    
    obtenerNotaActiva,
    
    seEstaGuardando,

    agregarImagen,

    limpiarElDiario,

} = elDiarioSlice.actions