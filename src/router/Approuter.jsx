


import {  Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { VerificarLogin } from '../ui/components/VerificarLogin';
import { useCheckAuth } from './../hooks/useCheckAuth';
import { Home } from './../Diario/pages/Home';



export const Approuter = () => {

  const status  = useCheckAuth();

  if (status === "checking") {
    return <VerificarLogin />
  }

  //console.log(status)

  return (
    
    <Routes>

      
        {/* {
          (status === "si-login") 
          ? <Route path="/*" element={<DiaroRoutes />} /> 
          : <Route path="/auth/*" element={<AuthRoutes />}/>
        }  */}


         <Route index element={ <Home /> } />
         <Route path="/home" element={ <Home /> } />
         <Route path="/*" element={ <Home /> } />

         <Route path="/auth/*" element={<AuthRoutes />}/>
    
    </Routes>
  )
}
