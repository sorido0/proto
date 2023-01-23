

import { BotonFlotante } from '../components';
import { NadaSelecionado, VerNota } from '../views';
import { DiarioLayout } from './../layout/DiarioLayout';
import { useSelector } from 'react-redux';

export const DiarioPages = () => {

     const { NotaActiva } = useSelector(state => state.elDiario);
    
    return (
        <DiarioLayout>


            {
                (!!NotaActiva)
                    ? <VerNota />
                    : <NadaSelecionado />

            
            }
           {/* <NadaSelecionado/> */}


           {/* <VerNota/> */}

           <BotonFlotante />
        </DiarioLayout>
    )
}
