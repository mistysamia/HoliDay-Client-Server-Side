import React from 'react';
import './Login.css';
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile } from "firebase/auth";
import initializeAuthentication from '../../Firebase/firebase.init';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { Link, useLocation, useHistory } from 'react-router-dom';

const googleProvider = new GoogleAuthProvider();
initializeAuthentication();

function Login() {
  const { signInUsingGoogle } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const auth = getAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || '/home';


  const handleGoogleLogin = () => {
    signInUsingGoogle()
      .then(result => {
        history.push(redirect_uri);
      })
      .catch(error => {
        console.log(error.message);
      })
  }

  const processLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => {   // to prevent error when trying to sign in multiple times 
        console.log(error.message);
      })
  }

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => {   // to prevent error when trying to sign in multiple times 
        console.log(error.message);
      })
  }

  const handleRegistration = (e) => { // if I pass e as a parameter then the page is not going to reload 
    e.preventDefault();
    console.log(password);
    if (!/(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}/.test(password)) {
      setError('Password must contains two uppercase letters, one special case letter, two digits,three lowercase letters and must be of length 8.');
      return;
    }
    if (isLogin) {
      loginUser(email, password);
    }
    else {
      createNewUser(email, password);
    }
  }

  const loginUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        history.push(redirect_uri);
        console.log(user);
        setError('');
      })
      .catch((error) => {
        setError(error.message);
      });
  }

  const createNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError('');
        verifyEmail();
        setUserName();
      })
      .catch((error) => {
        setError(error.message);
      });
  }
  const handleEmailChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  }
  const handleNameChange = (e) => {
    setName(e.target.value);
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }
  const handleRegisterChange = (e) => {
    setIsLogin(e.target.checked);
    console.log(e.target.checked)
  }


  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser)
      .then((result) => {
        history.push(redirect_uri);
        console.log(result)
      });
  }

  const handleResetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then((result) => {
        console.log(result)
      });
  }

  const setUserName = () => {
    updateProfile(auth.currentUser, {
      displayName: name
    }).then((result) => {
      console.log(result)
    });
  }
  return (
    <div className='container loginRegistration'>


      <form onSubmit={handleRegistration} className='mx-5 mt-5 '>
        <h1 className='text-primary mb-4'>Please {isLogin ? 'Login' : 'Register'} </h1>
        {!isLogin &&
          <div className="row mb-3">
            <label htmlFor="inputName3" className="col-sm-2 col-form-label labelTitle">Name :</label>
            <div className="col-sm-10">
              <input type="name" onBlur={handleNameChange} className="form-control" id="inputName3" />
            </div>
          </div>

        }

        <div className="row mb-3 ">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label labelTitle">Email :</label>
          <div className="col-sm-10">
            <input type="email" onBlur={handleEmailChange} className="form-control" id="inputEmail3" />
          </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label labelTitle">Password :</label>
          <div className="col-sm-10">
            <input type="password" onBlur={handlePasswordChange} className="form-control" id="inputPassword3" />
          </div>
        </div>
        <div className='checkboxField'>
          <input type="checkbox" onChange={handleRegisterChange} className='checkBoxInput mx-3' name="vehicle1" value="Bike"></input>
          <label for="vehicle1"> Already Registered ?</label>
        </div>


        <div>
          <p className='text-danger'>{error}</p>
        </div>
        <section className='submitBtn'>
          <button type="submit" className="btn btn-primary">{isLogin ? 'Sign In' : 'Sign Up'} </button>
          {/* <button type="button" className="btn btn-primary mx-5" onClick={handleResetPassword}>Reset Password</button> */}
        </section>

      </form>
      <section className='googleBtn'>
        <div class="d-grid gap-2 px-5">
          <button class="btn btn-success" onClick={handleGoogleLogin} type="button">Google Sign In</button>
        </div>
      </section></div>
  );
}


export default Login;