import React from 'react'
import ReactDOM from 'react-dom/client'

// Mis importaciones
import './styles.css'
import { DiarioApp } from './DiarioApp';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={ store }>
            
             <BrowserRouter>
                <DiarioApp />
            </BrowserRouter>

        </Provider>
    </React.StrictMode>
)
