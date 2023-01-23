import { AppBar, IconButton, Toolbar, Grid, Typography } from '@mui/material';
import { MenuOutlined } from '@mui/icons-material';
import { BotonSalir } from './BotonSalir';
import { BotonLogin } from './BotonLogin';




import { VerificarLogin } from './../../ui/components/VerificarLogin';
import { useCheckAuth } from './../../hooks/useCheckAuth';

export const NavBar = ( { drowerWidth} ) => {

    const status  = useCheckAuth();

    if (status === "checking") {
      return <VerificarLogin />
    }

  return (
   
    <AppBar position="fixed" sx={{ 
        width: { sm : `calc(100% - ${drowerWidth}px)`},
        ml: { sm: `${drowerWidth}px` }
     }}>
    
        <Toolbar >
                       
            <IconButton 
            color='inherit'
            edge='start'
            sx={{ mr: 2, display: { sm: "none"}}}
            id='menu'
            onClick={ () =>  {} }
            >
                <MenuOutlined />
            </IconButton>

            <Grid
            container direction='row' justifyContent="space-between" alignItems="center">
                <Typography variant='h6' noWrap component="div"> Diario </Typography> 

                {
                    (status === "si-login")
                    ?<BotonSalir />
                    :<BotonLogin />
                }

            </Grid>

        </Toolbar>
    </AppBar>

  )
}
