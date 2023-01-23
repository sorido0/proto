




import { useMemo } from 'react';

import { ListItem, ListItemButton, ListItemIcon, ListItemText, Grid } from '@mui/material';
import { TurnedInNot } from '@mui/icons-material';

import { useDispatch } from 'react-redux';

import { obtenerNotaActiva } from '../../store/eldiario';



export const NoteDerecha = ({ titulo, descripcion, id, fecha, imageUrl = [] }) => {

    const nuevoTitulo = useMemo(() => { 
        return titulo.length > 14 
        ? titulo.substring(0, 14) + "... "
        : titulo 
     }, [titulo]);

     const nuevoDescripcion = useMemo(() => { 
        return descripcion.length > 14 
        ? descripcion.substring(0, 14) + "... "
        : descripcion 
     }, [descripcion]);



    //console.log(nuevoTitulo);

    const pistola =  useDispatch();
    const yunito = () => {

        pistola( obtenerNotaActiva( { titulo, descripcion, id, fecha, imageUrl } ) );
        //console.log(id + " " + titulo);
    }

    return (
        <ListItem disablePadding
            onClick={ yunito }
        >
            <ListItemButton>
                <ListItemIcon>
                    <TurnedInNot>
                    </TurnedInNot>
                </ListItemIcon>
                <Grid>
                    <ListItemText primary={nuevoTitulo}
                       // onClick={xunito()}

                    />
                    <ListItemText secondary={ nuevoDescripcion } />
                </Grid>
            </ListItemButton>
        </ListItem>
    )
}
