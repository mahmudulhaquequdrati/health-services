import axios from "axios";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
  getIdToken,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";

import initFirebase from "../services/auth/firebase.init";

initFirebase();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setisAdmin] = useState(false);
  const [error, setError] = useState("");
  const [token, setToken] = useState("");
  const auth = getAuth();

  // Register an user
  const registerUser = (email, password, name, phone, photo, navigate) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        setError("");

        // update userName for firebase
        const updatedUser = {
          email: email,
          displayName: name,
          photoURL: photo,
        };
        setUser(updatedUser);
        // send user info to fireabse
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        });

        // send usr info to mongodb
        saveUser(email, name, phone);

        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      })
      .finally(() => setIsLoading(false));
  };

  // Login an user
  const loginUser = (email, password, location, navigate) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        setError("");
        const destination = location?.state?.from || "/";
        navigate(destination);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      })
      .finally(() => setIsLoading(false));
  };

  // logout an user
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {})
      .finally(() => setIsLoading(false));
  };

  // Observe an user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        getIdToken(user).then((idToken) => {
          setToken(idToken);
        });
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
  }, [auth]);

  // save user for database
  const saveUser = (email, displayName, phone) => {
    const user = { email, displayName, phone };
    axios.post("http://localhost:5000/users", user).then((res) => {
      console.log(res.data);
    });
  };

  // get admin from database
  useEffect(() => {
    axios.get(`http://localhost:5000/user/${user.email}`).then((res) => {
      setisAdmin(res.data.admin);
    });
  }, [user.email]);

  // end all the nesccessary things
  return {
    registerUser,
    user,
    token,
    isAdmin,
    loginUser,
    error,
    isLoading,
    logOut,
  };
};
export default useFirebase;
