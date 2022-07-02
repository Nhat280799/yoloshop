import React  , {useEffect } from 'react'
import {BrowserRouter , Route} from 'react-router-dom'
import Routess from '../routes/Routess'
import Header from './Header'
import Footer from './Footer'
import ProductModal from './ProductModal'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';



// Configure Firebase.
const config = {
  apiKey: 'AIzaSyC1SDzFYoWLFyFku0FmNZRkL2B8A_8Vt5U',
  authDomain: 'yolo-project-9d0d6.firebaseapp.com',
};
firebase.initializeApp(config);

const Layout = () => {

  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async (user) => {
      if (!user) {
        // user logs out, handle something here
        console.log('User is not logged in');
        return;
      }

      console.log('Logged in user: ', user.displayName);

      const token = await user.getIdToken();
      console.log('Logged in user token: ', token);
    });
    return () => unregisterAuthObserver();
  }, []);
  
  return (
    <BrowserRouter>
                <div>
                  <Header />
                    <div className="container">
                        <div className="main">
                            <Routess/>
                        </div>
                    </div>
                    <Footer />
                </div>
                <ProductModal />
        </BrowserRouter>
  )
}

export default Layout
