
import { Drawer, Box, Toolbar, Typography, Divider, List } from "@mui/material"
import { useSelector } from "react-redux";
import { NoteDerecha } from './../../ui/components/NoteDerecha';


export const BarraDerecha = ({ drowerWidth }) => {

    const { displayName } = useSelector(state => state.auth);
    const { nota } = useSelector(state => state.elDiario);


    return (

        <Box
            component="nav"
            sx={{
                witdh: { sm: drowerWidth },
                flexShrink: { sm: 0 }
            }}
        >

        <Drawer
                variant="permanent"
                open
                sx={{
                    display: {
                        xs: "block"
                    },
                    "& .MuiDrawer-paper": {
                        boxSizing: "border-box",
                        width: drowerWidth
                    }
                }}
            >

                <Toolbar>

                    <Typography variant="h6" noWrap component="div"> {displayName} </Typography>

                </Toolbar>

                <Divider />

                <List>
                    {
                        nota?.map(dato => (

                            <NoteDerecha key={dato.id} {...dato} />

                        )
                        )

                    }
                </List>
            </Drawer>

        </Box>
    )
}
