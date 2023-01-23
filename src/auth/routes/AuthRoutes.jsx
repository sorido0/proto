

import { Route, Routes } from 'react-router-dom';
import { Login } from './../pages/Login';
import { Registrar } from './../pages/Registrar';
import { Home } from './../../Diario/pages/Home';
import { useCheckAuth } from './../../hooks/useCheckAuth';
import { VerificarLogin } from './../../ui/components/VerificarLogin';
import { DiaroRoutes } from './../../Diario/router/DiaroRoutes';




export const AuthRoutes = () => {

  const status  = useCheckAuth();

  if (status === "checking") {
    return <VerificarLogin />
  }
  
  return (
    
    <Routes>
        
        <Route path="registrar" element={<Registrar />} />

        {
          (status === "si-login") 
          ? <Route path="/*" element={<DiaroRoutes />} />  
          : <Route path="login" element={<Login />} />
        } 
        
        <Route path="/*" element={ <Home />} />
    </Routes>

  )
}
