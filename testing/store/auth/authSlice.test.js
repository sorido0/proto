
import { estadoIniciales, loginEstado, logoutEstado, loginDemo } from '../../fixture/authFixtures';
     
import { authSlice, login, logout, verificandoCredentials } from './../../../src/store/auth/authSlice';


describe('Pruebas en authSlice ', () => {

    test('Debe de regresar el estado inicial o llamarse  authScile', () => {


        expect(authSlice.name).toBe('auth');

        const state = authSlice.reducer(estadoIniciales, {});

        expect(state).toEqual(estadoIniciales);
    })

    test('Debe regresar el esto del Login', () => {

        const state = authSlice.reducer(estadoIniciales, login(loginDemo));
        // console.log({state, loginEstado} )
        expect(state).toEqual(loginEstado);
    }
    );


    test('Debe regresar el esto del loguen', () => {

        const state = authSlice.reducer(estadoIniciales, logout());
        expect(state).toEqual(logoutEstado);
    });

    test('verificandoCredentials', () => { 

        const state = authSlice.reducer(estadoIniciales, verificandoCredentials(loginDemo));

        expect( state.status ).toEqual(
          
                 'verificando-login',
            
        );

     })


})