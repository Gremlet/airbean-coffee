import React from 'react'
import ReactDOM from 'react-dom'
import './scss/app.scss'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux'
import airbeanReducer from './redux/reducer.js'
import { Provider } from 'react-redux'
import './i18n'

// Store
const store = createStore(airbeanReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
)
