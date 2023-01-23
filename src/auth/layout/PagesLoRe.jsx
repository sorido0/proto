import { Grid, Typography } from '@mui/material'
import React from 'react'

export const PagesLoRe = ({children, titulo = "No definido"}) => {
    return (
        
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
            >
                <Grid
                    item
                    className="box-login"
                    // EL XS es un tanaño para pantalla
                    xs={3}
                    //El SX es para darle estilos y se puede usar el theme de material ui
                    sx={{ maxWidth: 400, bgcolor: 'background.paper', borderRadius: 2, padding: 4, width: '400px' }}
                >
                    <Typography variant="h5" sx={{ mb: 1 }}>{ titulo}</Typography>
                
                    { children }
                </Grid>
            </Grid>
        

    )
}
