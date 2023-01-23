import { useMemo } from "react"; 
import { Button, Grid, TextField, Typography, Alert } from "@mui/material"
import { Google } from "@mui/icons-material"
import { Link } from "react-router-dom"
import { Link as RLink } from "react-router-dom"
import { PagesLoRe } from './../layout/PagesLoRe';

// importaciones de react-redux
import { useDispatch, useSelector } from 'react-redux';
import { varificarAutenticacion, loginGoogleOk, inicioSession } from "./../../store/auth"

// Mis importaciones, mis hooks
import { useForms } from './../../hooks';


const estadoInicial = {
  email: '',
  password: ''
}


export const Login = () => {


  const { status, errorMensaje  } = useSelector(state => state.auth)
  
  const dispatch = useDispatch();



  const { Forms, email, password, handleInput } = useForms(estadoInicial);

  console.log( { email } );

  const verificandoMemo = useMemo( () => status === "verificando-login" , [ status])
  
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(varificarAutenticacion());
    dispatch( inicioSession( Forms ) );

    console.log(Forms);
  
  }

  const onGoogleSumit = () => {

    
    
    dispatch(loginGoogleOk())
  }





  return (
    <>
      <PagesLoRe titulo="Login">

        <form onSubmit={handleSubmit}>

          <Grid container>

            <Grid item xs={12}>
              <TextField
                label="correo"
                type="email"
                placeholder="Correo@google.com"
                fullWidth
                m={4}
                name="email"
                value={email}
                onChange={handleInput}
              />
            </Grid>

            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="contraseña"
                type="password"
                placeholder="@google.com"
                fullWidth
                m={4}
                name="password"
                value={password}
                onChange={handleInput}
              />
            </Grid>

            <Grid container spacing={2} sx={{ mb: 2, mt: 1 }} justifyContent="center" alignItems="center">

              <Grid item xs={12} md={6} sx={{ mt: 2 }}
                display={ !!errorMensaje ? "" : "none"}
              >
                <Alert severity="error"> {errorMensaje} </Alert>  
              </Grid>
              
              
              <Grid item xs={12} sm={6} >

                <Button 
                  disabled={verificandoMemo}
                  variant="contained" 
                  fullWidth
                  type="submit"
                >
                   {/* <Link compenent={RLink}  to="/diario"  style={{ textDecoration: 'none', color: "white" }}> */}
                    Iniciar Sesión
                  {/* </Link>  */}
                </Button>

              </Grid>

              <Grid item xs={12} sm={6}  >

                <Button 
                  disabled={verificandoMemo}
                  variant="contained" 
                  fullWidth
                  onClick={onGoogleSumit}
                  aria-label="btnGoogle"
                >
                  <Google />
                  <Typography sx={{ ml: 1 }}> Google </Typography>

                </Button>

              </Grid>

            </Grid>

            <Grid container direction="row" justifyContent="end">
              <Link compenent={RLink} color="inherit" to="/auth/registrar">
                Crear una cuenta
              </Link>
            </Grid>

          </Grid>



        </form>


      </PagesLoRe>

    </>
  )
}
