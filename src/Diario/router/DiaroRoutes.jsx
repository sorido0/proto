
import { Navigate, Route, Routes } from 'react-router-dom';
import { DiarioPages } from '../pages/DiarioPages';




export const DiaroRoutes = () => {
  return (
    <Routes>


      {/* Esta es la ruta de Diario */}
      <Route path="/*" element={<DiarioPages />} />
     

      {/* Todo lo que no venga de login regresa a DiarioPagegs */}
      <Route path="/*" element={<Navigate to="/home" />} />
        
        
    </Routes>
  )
}
