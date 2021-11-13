import { useState, useEffect } from 'react';
import initializeFirebase from '../Pages/Login/Firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, updateProfile, getIdToken, signOut} from "firebase/auth";

initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // Register
    const registerUser = (email, password, name, history) => {

      setIsLoading(true);

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setAuthError('');
            const newUser = {email, displayName: name};
            setUser(newUser);
            // Save User to Database
            saveUser(email, name, 'POST');
            // Send name to Firebase after creation
            updateProfile(auth.currentUser, {
              displayName: name
            }).then(() => {
            }).catch((error) => {
            });
            history.replace('/');
        })
          .catch((error) => {
            setAuthError(error.message);
          })
          .finally(() => setIsLoading(false));
    }

    // Login
    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              const destination = location.state?.from || '/dashboard';
              history.replace(destination);
              setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
              })
            .finally(() => setIsLoading(false));;
    }

    // Google Login
    const signinWithGoogle = (location, history) => {
      setIsLoading(true);
      signInWithPopup(auth, googleProvider)
        .then((result) => {
          const user = result.user;
          const destination = location.state?.from || '/dashboard';
          history.replace(destination);
          // Save User to Database
          saveUser(user.email, user.displayName, 'PUT');
          setAuthError('');
        }).catch((error) => {
          setAuthError(error.message);
        })
        .finally(() => setIsLoading(false));
    }

    // Observer user state
    useEffect (() =>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
              getIdToken(user)
              .then(idToken => {
                console.log(idToken);
                setToken(idToken);
              })
            } else {
              setUser({});
            }
            setIsLoading(false);
          });
          return () => unsubscribe;
    }, [])

    // Admin
    useEffect(() => {
      fetch(`https://the-niketan-server.herokuapp.com/users/${user.email}`)
          .then((response) => response.json())
          .then((data) => setAdmin(data.admin))
          .catch((error) => {
              console.log(error);
          })
    }, [user.email])    

    // Logout
    const logout = () => {
      setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally(() => setIsLoading(false));
    }

    // Save User informations in database
    const saveUser = (email, displayName, method) => {
      const user = {email, displayName};
      fetch('https://the-niketan-server.herokuapp.com/users', {
        method: method,
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      .then()
    }

    return{
        user,
        admin,
        token,
        authError,
        isLoading,
        registerUser,
        loginUser,
        signinWithGoogle,
        logout
    }
}

export default useFirebase;