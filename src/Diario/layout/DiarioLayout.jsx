
import { Box, Toolbar } from '@mui/material';
import { BarraDerecha, NavBar } from '../components';

const drowerWidth = 240;

export const DiarioLayout = ({ children }) => {


  
    return (

        <Box sx={{ display: 'flex' }}>

            <NavBar drowerWidth={drowerWidth} />

            <BarraDerecha drowerWidth={drowerWidth} />

            <Box component="main"
                sx={{
                    width: { sm: `calc(100% - ${drowerWidth}px)` },
                    ml: { sm: `${drowerWidth}px` },
                    flexGrow: 1, p: 3
                }}

            >

                <Toolbar />

                {children}

            </Box>

        </Box>


    )
}
