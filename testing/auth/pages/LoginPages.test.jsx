
import { fireEvent, render , screen} from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';





import { Login } from './../../../src/auth/pages/Login';
import { authSlice } from './../../../src/store/auth/authSlice';
import { logoutEstado } from '../../fixture/authFixtures';


const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
    },
    preloadedState: {
        auth: logoutEstado
    }


})


describe('Pruebas en login pages ', () => {

    const dispatch = jest.fn();

    
    test('Debe de mostrarse correctamente', () => {

        // render(
        //     <Provider store={store}>
        //         <MemoryRouter>
        //             <Login />
        //         </MemoryRouter>
        //     </Provider>
        // )

        // //screen.debug()

        // expect(screen.getAllByText('Login').length ).toBeGreaterThanOrEqual(1);

    })

    test('Debe de llamar loginGoogleOk() ', () => { 

        render(
            <Provider store={store}>
                <MemoryRouter>
                    <Login />
                </MemoryRouter>
            </Provider>
        )
        
        const btnGoogle = screen.getByLabelText('btnGoogle');
        fireEvent.click(btnGoogle);



     })




})