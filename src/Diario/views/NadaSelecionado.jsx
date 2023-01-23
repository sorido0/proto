
import { StarOutline } from '@mui/icons-material';
import { Grid,Typography, Box } from '@mui/material';



export const NadaSelecionado = () => {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: 'calc(100vh - 115px)', backgroundColor: 'primary.main', padding: 4, borderRadius: 3 }}
        >

            <Grid item xs={ 12 }>
                <StarOutline sx={{ fontSize: 100, color: "white" }} />
            </Grid>

            <Grid item xs={ 12 }>
                <Typography variant="h5" sx={{ color: "white" }}>Seleccione una nota</Typography>
            </Grid>



        </Grid>
    )
}
