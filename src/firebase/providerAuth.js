import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { DiarioAuth } from "./config";



const googleProvider = new GoogleAuthProvider();

export const entreConGoogle = async () => {

    try {

        const resultados =  await signInWithPopup( DiarioAuth, googleProvider );
        
        //const credensiales = GoogleAuthProvider.credentialFromResult( resultados );
        //console.log(resultados);
        
        const { displayName , email, uid , photoURL } = resultados.user;       
        
        console.log({ displayName, email, uid, photoURL });


        return { 

            ok: true, 
            displayName, 
            email, 
            uid, 
            photoURL 
        };



    } catch (error) {
        
        const { code, message } = error;
        
        console.log(error);
        
        return {
            
            ok: false,
            
            msg: message,   
            
            ecode: code


        }
    
    }
}       


export const registarConCorreoYContrasena = async ( {nombre, email, password} ) => { 

    try {
        
        const resultados = await createUserWithEmailAndPassword( DiarioAuth, email, password );
        
        const { user } = resultados;
        
        //await updateProfile( user, { displayName: nombre } );
        
        await updateProfile( DiarioAuth.currentUser, { displayName: nombre } );
        
       // console.log(resultados);
        
       //console.log(user);
        
    
        return { 
            
            ok: true, 
            
            uid: user.uid, 
            
            displayName: user.displayName, 
            
            email: user.email, 
            
            photoURL: user.photoURL 
        
        };

    } catch (error) {
        
        const { code, message } = error;
        //console.log(error);
        return {

            ok: false,
            
            errorMensaje: message,   
            
            ecode: code
        
        }
        console.log("mmg")
    }
}

export const loginConCorreoYContrasena = async( { email, password } ) => {


    try {
        
        const resultados = await signInWithEmailAndPassword( DiarioAuth, email, password );
           
        const { uid, photoURL, displayName } = resultados.user;
        
    
        return {
                
                ok: true, uid, displayName, email, photoURL
            
            };

    } catch (error) {
            
            const { code, message } = error;
            //console.log(error);
            return {
    
                ok: false,
                
                errorMensaje: message,   
                
                ecode: code
            
            }
            
        }
}


