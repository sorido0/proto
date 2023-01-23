
import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { onAuthStateChanged } from 'firebase/auth';
import { login, logout } from '../store/auth';
import { DiarioAuth } from '../firebase/config';
import { cargarNotas } from '../store/eldiario';

export const useCheckAuth = () => {

    const { status } = useSelector(state => state.auth);

    const dispatch = useDispatch();
  
    useEffect(() => {
  
         onAuthStateChanged( DiarioAuth, async( user ) => {
           //console.log( user );
           if( !user) return dispatch( logout() );
           
            const { displayName, email, uid, photoURL } = user;
            dispatch( login( { displayName, email, uid, photoURL }) )
            //dispatch( login( user ))

            dispatch( cargarNotas() )
  
         })
      
    }, [])

  return status;
  
}
