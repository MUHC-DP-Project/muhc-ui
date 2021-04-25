import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {reducer as reduxFormReducer} from 'redux-form';
import errorHandlerReducer from './store/reducers/errorHandler';
import authReducer from './store/reducers/auth';
import managePageReducer from './store/reducers/manage';
import loadFormReducer from './store/reducers/loader';
import signUpReducer from './store/reducers/signUp';
import homeReducer from './store/reducers/home';
const rootReducer = combineReducers({
    //add orther reducers
    auth:authReducer,
    errorHandler:errorHandlerReducer,
    signUp:signUpReducer,
    form: reduxFormReducer,
    manage:managePageReducer,
    formLoader:loadFormReducer,
    home:homeReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const pbrn_store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
ReactDOM.render(
    <React.StrictMode>
    <Provider store={pbrn_store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
</React.StrictMode>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function to
// log results (for example: reportWebVitals(console.log)) or send to an
// analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
