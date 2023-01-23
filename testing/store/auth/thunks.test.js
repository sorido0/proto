


import { entreConGoogle, loginConCorreoYContrasena, registarConCorreoYContrasena } from "../../../src/firebase/providerAuth";
import { cerrarSession, inicioCreacionCuenta, inicioSession, loginGoogleOk, varificarAutenticacion } from "../../../src/store/auth/thunks";
import { login, logout, verificandoCredentials } from "../../../src/store/auth/authSlice";
import { loginDemo } from "../../fixture/authFixtures";
import { limpiarElDiario } from "../../../src/store/eldiario/eldiarioSlice";
jest.mock('./../../../src/firebase/providerAuth');






describe('Pruebas en los thunks ', () => {

    const dispatch = jest.fn();

    beforeEach(() => jest.clearAllMocks());

    test('Preubas en vereficaciond de credenciales', async () => {

        await varificarAutenticacion()(dispatch);

        expect(dispatch).toHaveBeenCalledWith(verificandoCredentials());


    });

    test('Preubas en vereficaciond de loginGoogleOk', async () => {

        const loginData = { ok: true, loginDemo }
        await entreConGoogle.mockResolvedValue(loginData);

        await loginGoogleOk()(dispatch);
     


        expect(dispatch).toHaveBeenCalledWith(verificandoCredentials());
        expect(dispatch).toHaveBeenCalledWith(login(loginData));


    })

    test('Preubas en vereficaciond de loginGoogleOk', async () => {

        const loginData = { ok: false, errorMensaje: "Error en Google", ecode: "Error en Google" }

        await entreConGoogle.mockResolvedValue(loginData);

        await loginGoogleOk()(dispatch);

        // console.log({dispatch});

        
        expect(dispatch).toHaveBeenCalledWith(verificandoCredentials());
        expect(dispatch).toHaveBeenCalledWith(logout(loginData));


    })


    test('Preubas en vereficaciond de inicioCreacionCuenta login - Exito ', async () => {

        const loginData = { ok: true, ...loginDemo }
        const formDara = { email: loginDemo.email, password: loginDemo.password, nombre: loginDemo.displayName }

        const paraLogin = { uid: loginDemo.uid, photoURL: loginDemo.photoURL, nombre: loginDemo.displayName, email: loginDemo.email }

        await registarConCorreoYContrasena.mockResolvedValue(loginData);

        await inicioCreacionCuenta( formDara )(dispatch);

       // console.log(resolt1);
        //console.log(resolt2);



        expect(dispatch).toHaveBeenCalledWith(verificandoCredentials());
        expect(dispatch).toHaveBeenCalledWith( login(
                {
                uid: loginDemo.uid,
                photoURL: loginDemo.photoURL,
                nombre: loginDemo.displayName,
                email: loginDemo.email
                }
            )   
        );


    })

    test('Preubas en vereficaciond de inicioCreacionCuenta logout - Error ', async () => {

        const loginData = { ok: false, errorMensaje: "Error en Google", ecode: "Error en Google" }
        const formDara = { email: loginDemo.email, password: loginDemo.password, nombre: loginDemo.nombre }


        await registarConCorreoYContrasena.mockResolvedValue(loginData);

        await inicioCreacionCuenta( formDara )(dispatch);

       // console.log(resolt1);
        //console.log(resolt2);


       // console.log(dispatch);

       expect(dispatch).toHaveBeenCalledWith(verificandoCredentials());
        expect(dispatch).toHaveBeenCalledWith( logout(
                {
                errorMensaje: loginData.errorMensaje,
                ecode: loginData.ecode
                }
            )
        );


    })

    test('Preubas en vereficaciond de inicioSeccion  login - Exito ', async () => {

        const loginData = { ok: true, ...loginDemo }
        const formDara = { email: loginDemo.email, password: loginDemo.password}

        await loginConCorreoYContrasena.mockResolvedValue(loginData);
        await inicioSession( formDara )(dispatch);

        expect(dispatch).toHaveBeenCalledWith(verificandoCredentials());
        expect(dispatch).toHaveBeenCalledWith( login(loginData));

    })

    test('Preubas en vereficaciond de inicioSeccion  logout  - Error ', async () => {

        const loginData = { ok: false, errorMensaje: "Error en Google" }
        const formDara = { email: loginDemo.email, password: loginDemo.password}

       

        await loginConCorreoYContrasena.mockResolvedValue(loginData);
        await inicioSession( formDara )(dispatch);

        expect(dispatch).toHaveBeenCalledWith(verificandoCredentials());
        expect(dispatch).toHaveBeenCalledWith( logout({ errorMensaje: "Error en Google" }));

    })

    test("'Pruebas en cerrarSession", async () => {

        await cerrarSession()(dispatch);

        expect(dispatch).toHaveBeenCalledWith(limpiarElDiario());
        expect(dispatch).toHaveBeenCalledWith(logout({}));

        
        
    })
})