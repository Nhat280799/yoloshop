import React from 'react';
import ReactDOM from 'react-dom/client';
import './sass/index.scss';
import Layout from './component/Layout';
import store from './redux/store';
import { Provider } from 'react-redux';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
const root = ReactDOM.createRoot(document.getElementById('root'));

// Configure Firebase.
const config = {
  apiKey: 'AIzaSyC1SDzFYoWLFyFku0FmNZRkL2B8A_8Vt5U',
  authDomain: 'yolo-project-9d0d6.firebaseapp.com',
  // ...
};
firebase.initializeApp(config);


root.render(
  <React.StrictMode>
    <Provider store={store}>
    <Layout />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals