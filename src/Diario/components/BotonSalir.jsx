
import { IconButton } from '@mui/material';
import { LogoutOutlined } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { cerrarSession } from "../../store/auth";


export const BotonSalir = () => {
    const dispatch = useDispatch(); 
    return (
        <IconButton
            color='error'
            onClick={() => dispatch(cerrarSession())}
        >

            {/* <Link compenent={RLink} color="inherit" to="/auth/login"> */}

            <LogoutOutlined />
            {/* </Link> */}
        </IconButton>
    )
}
