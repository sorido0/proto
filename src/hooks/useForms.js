import { useEffect, useState, useMemo } from "react";


export const useForms = (valoresIniciales = {}, validarFormularios = {} ) => {
 
    const [Forms, setForms] = useState(valoresIniciales);
    
    const [ validarFormulario, setValidarFormulario ] = useState({});

    useEffect(() => {
    
        crearValidacion();
    
    }, [Forms]); 

    useEffect(() => {
    
        setForms( valoresIniciales );
    
    }, [valoresIniciales]); 

    const datosValidos = useMemo(( ) => {
       
        for ( const formField of Object.keys( validarFormulario ) ) {
            if ( validarFormulario[formField] !== null) return false;
            
        }
        return true;
      
    }, [ validarFormulario ] );

    


    const handleInput = ( {target} ) => {
        const { name, value } = target;
        setForms({
            ...Forms,
            [ name ]: value
        });
    };

    //==========console.log(Forms);
    const formsRecet = () => {
        setForms(valoresIniciales)
    }

    const crearValidacion = () => {
        const validar = {};

        for ( const formField of Object.keys( validarFormularios) ) {
           // console.log(formField);
            const [ fn, msjError ] = validarFormularios[formField];

            validar[`${ formField }Valido`] = fn( Forms[ formField ] ) ? null : msjError;
        }

        setValidarFormulario( validar );
       // console.log(validar);
        
      
    }

    return {  Forms , ...validarFormulario, datosValidos, handleInput, formsRecet};

}
