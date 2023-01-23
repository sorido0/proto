
import { useMemo, useEffect, useRef } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { DeleteOutlineOutlined, SaveOutlined , UploadOutlined } from '@mui/icons-material';
import { Grid, Typography, TextField, Button, IconButton } from '@mui/material';

import Swal from 'sweetalert2';
import "sweetalert2/dist/sweetalert2.min.css";

import { ImgGalery } from '../components';

import { useForms } from './../../hooks/useForms';
import { obtenerNotaActiva } from '../../store/eldiario';
import { borrarNota, guardarNota, subirImagen } from './../../store/eldiario/thunks';




export const VerNota = () => {

    const { NotaActiva, mensajeGuardaro, seGuardo } = useSelector(state => state.elDiario);

    const dispatch = useDispatch();

    const imgButtoRef = useRef();


    const datos = useForms(NotaActiva);

    const { handleInput } = datos;

    const { titulo, descripcion, fecha, imageUrl } = datos.Forms;

    useEffect(() => {

        if (mensajeGuardaro) {

            Swal.fire('Guardado', mensajeGuardaro, 'success');

        }
    }, [mensajeGuardaro]);

    const handleSave = () => {

        dispatch(obtenerNotaActiva(datos.Forms));
        dispatch(guardarNota(datos.Forms));


    }

    //console.log(datos);

    // Para ver la fecha en el formato que queremos

    const fechaFormateada = useMemo(() => {

        return new Date(fecha).toLocaleDateString();


    }
        , [fecha]);


    const cargarImagenesInput = ({ target }) => {

        //console.log(target.files);

        if (target.files === 0) return


        // Para cargar las imagenes en el input
        dispatch(subirImagen(target.files));
        //dispatch(obtenerNotaActiva({ ...datos.Forms, imageUrl: imagenes }));

    }

    const handleDeleteNota = () => {
       
        dispatch( borrarNota() );
    }


    return (
        <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ padding: 1, borderRadius: 3, mb: 1 }}
        >
            <Grid item >
                <Typography fontSize={39} fontWeight="light"> {fechaFormateada}</Typography>
            </Grid>

            <Grid item >

                {/* Estos para cargar las imagenes a la nota  */}
                <input 
                    type="file" 
                    ref={imgButtoRef} 
                    multiple onChange={cargarImagenesInput} 
                    style={{ display: "none" }}
                    />
                

                <IconButton
                    disabled={ seGuardo }
                    onClick={ () => imgButtoRef.current.click() } 
                >
                    <UploadOutlined />
                </IconButton>

                <Button color='primary' sx={{ padding: 2 }} onClick={handleSave}
                    disabled={ seGuardo }
                >
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                    Guardar
                </Button>
            </Grid>

            <Grid container direction="column" justifyContent="center" sx={{ width: '100%', mt: 2 }}>

                <Grid item >
                    <TextField

                        type="text"
                        label="Titulo"
                        variant="filled"
                        fullWidth
                        placeholder='Ingrese un titulo'
                        sx={{ border: "none", mb: 1, color: "white" }}
                        name="titulo"
                        value={titulo}
                        onChange={handleInput}
                    >
                    </TextField>
                </Grid>

                <Grid item >
                    <TextField
                        color='white'
                        type="text"
                        variant="filled"
                        placeholder='Que paso en el dia de hoy'
                        sx={{ border: "none", mb: 1, color: "white" }}
                        fullWidth
                        minRows={6}
                        multiline
                        name="descripcion"
                        value={descripcion}
                        onChange={handleInput}
                    >

                    </TextField>

                </Grid>

            </Grid>

            <Grid container justifyContent="end" >
                <IconButton
                    disabled={ seGuardo }
                    onClick={ handleDeleteNota }
                    sx={{ color: "red", margin: 2 }}

                >
                    <DeleteOutlineOutlined />
                    Borrar
                </IconButton>
            </Grid>

            <ImgGalery />

        </Grid>
    )
}
