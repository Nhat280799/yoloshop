import React , {useEffect} from 'react'
import Section , {SectionBody , SectionTitle} from '../component/Section'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


const uiConfig = {
  signInFlow: 'redirect',
  signInSuccessUrl: '/',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID
  ],
};


const Login = () => {

  return (
    <Section>
        <SectionTitle>
            Đăng nhập
        </SectionTitle>
        <SectionBody>
        <StyledFirebaseAuth 
              uiConfig={uiConfig} 
              firebaseAuth={firebase.auth()} 
          />
          <a onClick={() => firebase.auth().signOut()}>Sign-out</a>
        </SectionBody>
    </Section>
  )
}

export default Login
