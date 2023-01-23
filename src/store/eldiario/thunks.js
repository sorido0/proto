
import { collection, doc, setDoc, getDocs, deleteDoc } from "firebase/firestore/lite"
import { subirArchivos } from "../../helpers";
import { DiarioDB } from './../../firebase/config';
import { actulizarNota, anadirNuevaNotaBasia, notaObtenida, obtenerNotaActiva, seEstaGuardando, agregarImagen, elminarNotaPorId } from "./elDiarioSlice";



export const iniciarNuevaNota = () => {

    return async (dispatch, getState) => {
        
        const { uid } = getState().auth;
        dispatch(seEstaGuardando())

        //const { uid } = auth

        //console.log(uid)

        const nuevaNota = {
            titulo: '',
            descripcion: '',
            fecha: new Date().getTime(),
            imageUrl: [],
        }

        const nuevoDocuemnto = doc(collection(DiarioDB, `${uid}/diario/notas`));
        await setDoc(nuevoDocuemnto, nuevaNota);

        nuevaNota.id = nuevoDocuemnto.id
        dispatch(anadirNuevaNotaBasia(nuevaNota))
        dispatch(obtenerNotaActiva(nuevaNota))

    }
}

export const cargarNotas = () => {

    return async (dispatch, getState) => {
        const { uid } = getState().auth;

        const notasSnap = await getDocs(collection(DiarioDB, `${uid}/diario/notas`));

        const notas = [];

        notasSnap.forEach(snapHijo => {
            notas.push({
                id: snapHijo.id,
                ...snapHijo.data()
            })
        })

        dispatch(notaObtenida(notas))
    
    }
}



export const guardarNota = (nota) => {

    return async (dispatch, getState) => {
        
        dispatch(seEstaGuardando())
        
        // tenermos que obtener el uid del usuario
        const { uid } = getState().auth;

        // tenemos que obtener la nota activa
        const {NotaActiva} = getState().elDiario;

        //const { uid } = auth
        
        // La nota para FireStore
        const notaToFirestore = {...NotaActiva};
        
        delete notaToFirestore.id;
       
        console.log(notaToFirestore)
        const notaRef = doc(collection(DiarioDB, `${uid}/diario/notas`), nota.id);
        
        // Guardamos la nota en FireStore: { marge: true } es para conservar dotos los campos.
        await setDoc(notaRef, notaToFirestore, {merge: true});
        
        dispatch( actulizarNota(nota))

    }
}

// thunks para subir lals imagenes a cloudinary
export const subirImagen = ( file = [] ) => {
    return async (dispatch, getState) => {

        //Blouquear el boton de guardar mientras guasrda la imagen
        dispatch(seEstaGuardando())

        //console.log(file)


        const subirArchivosPorPremesa = [];
        for( const files of file ){
            subirArchivosPorPremesa.push( subirArchivos( files ) )
        }


        const photosUrls = await Promise.all( subirArchivosPorPremesa );

        
        //console.log(photosUrls); 
        
        //await subirArchivos( file[0] )
        
        
        
        dispatch( agregarImagen( photosUrls ) )
    }
}

// borrar nota de firebase
export const borrarNota = () => {
    return  async (dispatch, getState) => {
        // Este es el id del usuario
        const { uid } = getState().auth;

        const { id } = getState().elDiario.NotaActiva;

        // Este es el id de la nota
        const notaRef = doc( DiarioDB, `${uid}/diario/notas/${id}`);

        // Borrar la nota
        await deleteDoc( notaRef );

         dispatch( elminarNotaPorId(id) )
    }
}


