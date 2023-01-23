import { Button } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';



const estilosLink = {
    textDecoration: 'none',
    color: 'white',
    border: '1px solid white',
    backgroundColor: '#35669E',
    padding: '7px 15px',
    textAlign: 'center',
    display: 'inline-block',
    fontSize: '16px',
    borderRadius: '5px',
    margin: '4px 2px',
    cursor: 'pointer',
    transitionDuration: '0.4s',
    ":hover": {
        backgroundColor: '#4CAF50',
        color: 'white',
    }
}   

export const BotonLogin = () => {
   
    return (
                
            <NavLink id="RouterNavLink" style={estilosLink} to="/auth/login"> 
                Login
            </NavLink>
       
    )
}