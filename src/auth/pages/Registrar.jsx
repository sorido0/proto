
//import de React
import { useState, useMemo } from 'react';


//import de react-router-dom
import { Link as RLink } from "react-router-dom"
import { Link } from "react-router-dom"

//import de material-ui
import { Alert, Button, Grid, TextField, Typography } from "@mui/material"

//import de react-redux
import { useDispatch, useSelector } from 'react-redux';

//Mis importaciones y hooks
import { PagesLoRe } from './../layout/PagesLoRe';
import { useForms } from './../../hooks';
import { inicioCreacionCuenta } from './../../store/auth/thunks';




    const datosFormulario = {
       
        nombre: '',
       
        email: '',
       
        password: ''
      }

    const validarFormularios =  {
        
        nombre: [ ( value  ) => value.length >= 3, 'El nombre debe tener al menos 3 caracteres' ],
        
        email: [ ( value ) => value.includes('@'), 'El email debe tener @ como caracteres' ],
        
        password: [ ( value ) => value.length >= 8, 'El password debe tener al menos 6 caracteres' ],
    
    }

export const Registrar = () => {

    
    //const { status  } = useSelector(state => state.auth)
  
    const dispatch = useDispatch();

    const [SeEnvio, setSeEnvio] = useState(false)


    const { status , errorMensaje } = useSelector( state => state.auth );

    const siEstaVerificando = useMemo( () => status === 'verificando-login', [status])

    const { 

        nombre, email, password, 
        nombreValido, emailValido, passwordValido, 
        handleInput, Forms, datosValidos  
    
    } = useForms(datosFormulario, validarFormularios);
    
   // console.log(datosValidos)
    
    const handleSubmit = (e) => {
        
        e.preventDefault();

        setSeEnvio(true)
        
        console.log("no pase");
        
        if ( !datosValidos ) return;
        dispatch( inicioCreacionCuenta(Forms))
        console.log("si pase");
    }

    
    
    return (


        <PagesLoRe titulo="Registrar">
            
            <form onSubmit={ handleSubmit}>
                
                <h1>Datos corretos { datosValidos? "si": "no"  } </h1>
                
                <Grid item xs={12}>
                    <TextField
                        autoComplete="fname"
                        label="nombre"
                        type="text"
                        placeholder="Angel Soriano"
                        fullWidth
                        m={4}
                        name="nombre"
                        value={ nombre }
                        onChange={ handleInput }
                        required
                        error={ !!nombreValido && SeEnvio}
                        helperText={ nombreValido }
                                      
                    />
                </Grid>

                <Grid item xs={12} sx={{ mt: 2 }}>
                    
                    <TextField
                        autoComplete="false"
                        label="email"
                        type="email"
                        placeholder="@google.com"
                        fullWidth
                        m={4}
                        name="email"
                        value={ email }
                        onChange={ handleInput }
                        required
                        error={ !!emailValido && SeEnvio }
                        helperText={ emailValido }
                    />
                
                </Grid>

                <Grid item xs={12} sx={{ mt: 2 }}>
                    
                    <TextField
                        autoComplete="false"
                        label="Confirmar contraseña"
                        type="password"
                        placeholder="@google.com"
                        fullWidth
                        m={4}
                        name="password"
                        value={ password }
                        onChange={ handleInput }
                        required={true}
                        error={ !!passwordValido && SeEnvio }
                        helperText={ passwordValido }
                    />
                
                </Grid>

                <Grid container spacing={2} sx={{ mb: 2, mt: 1 }} justifyContent="center" alignItems="center">

                    <Grid item xs={12} sm={6}  display={ !!errorMensaje ? "" : "none"}>
                        <Alert severity="error">{  errorMensaje }</Alert>    
                    </Grid>
                    
                    
                    <Grid item xs={12} sm={6} >
                        <Button 
                            onClick={ handleSubmit }
                            variant="contained" 
                            fullWidth
                            disabled={ siEstaVerificando }
                        >
                            <Link 
                                style={{ textDecoration: 'none', color: 'white' }}
                                state={{ nombre, email, password }}
                                compenent={RLink} 
                                color="inherit" 
                                to="/diario" 
                            > 
                                Registrar
                             </Link>
                        </Button>

                    </Grid>

                </Grid>

                <Grid container direction="row" justifyContent="end">
                
                    <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>

                    <Link compenent={RLink} color="inherit" to="/auth/login">
                        Entrar
                    </Link>
                 
                 </Grid>
            
            </form>
        
        </PagesLoRe>

    )
}
