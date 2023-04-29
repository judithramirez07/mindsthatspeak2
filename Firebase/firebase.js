import {initializeApp} from 'firebase/app';
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile,signOut,onAuthStateChanged} from "firebase/auth";
import { getFirestore,collection,doc,setDoc } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAzLcAPRlJetK_rFYDwTqQK1CiWhjZFlg4",
    authDomain: "proyecto-623e8.firebaseapp.com",
    projectId: "proyecto-623e8",
    storageBucket: "proyecto-623e8.appspot.com",
    messagingSenderId: "218522772078",
    appId: "1:218522772078:web:7092ac8ef6998a23a0fc7f"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app); 

// Initialize Firebase Authentication and get a reference to the service
export const authentication = getAuth(app);

//Exportacion para registro
export const signup = async ({ nombre,edad,telefono, email, password }) => {
    const { user } = await createUserWithEmailAndPassword(authentication, email, password);
    return user;
  };

// Exportacion para inciar sesion
export const signin = async({email,password}) =>{
  const {user} = await signInWithEmailAndPassword(authentication,email,password);
  return user;
};

//Exportacion para cerrar sesion
export const signout = async () =>{
  console.log("llamando a cerrar sesion");
  console.log(authentication.currentUser);
  await signOut(authentication);
   return {};
};

//export{authentication,db};