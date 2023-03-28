import React,{useContext, useState,useRef,useEffect} from "react";
import { View,Text,StyleSheet,Button,ScrollView,Image,TextInput,TouchableOpacity, Alert} from 'react-native';
import BackIcon from 'react-native-vector-icons/Feather';
import { UserContext, ProgressContext} from "../contexts";
import { authentication } from "../Firebase/firebase";
import { getAuth,createUserWithEmailAndPassword,sendEmailVerification} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { signup } from "../Firebase/firebase";
import FormError from "../Components/FormError";
import FormSuccess from "../Components/FormSuccess";
import { db } from "../Firebase/firebase";
import { collection,addDoc } from "firebase/firestore";
import { validateEmail,removeWhitespace } from "../utils";
import { async } from "@firebase/util";



const CrearCuenta = ({navigation}) => {
    const {setUser} = useContext(UserContext);
    //STATE DEL FROMULARIO
    const[nombre, guardarNombre]= useState('');
    const[edad, guardarEdad]= useState('');
    const[errMessage,setErrorMessage]= useState('');
    const[succesMessage,setSuccessMessage] = useState('');
    const [isLoading,setIsLoading]= useState(false);
    const[telefono, guardarTelefono]= useState('');
    const[email, guardarEmail]= useState('');
    const[password, guardarPassword]= useState('');
    const[displayFormErr, setDisplayFormErr]= useState(false);

    const refEmail = useRef(null);
    const refPassword = useRef(null);
    const refDidMount = useRef(null);

    //REACT NAVIGATION
    function navigate(){
        navigation.navigate('login');
    }
  
    //VALIDACION DE FROMULARIO
    const validatForm=async()=>{
        var form_inputs = [nombre,edad,telefono,email,password];
        if(form_inputs.includes('') || form_inputs.includes(undefined) || form_inputs.includes(null)){
            setErrorMessage("Todos los campos son obligatorios");
            return setDisplayFormErr(true);
        }else if(!validateEmail(email)){
            setErrorMessage("Verifica tu email");
            return setDisplayFormErr(true);
        } else if(password.length < 6){
            setErrorMessage("La contraseña debe contener al menos 6 caracteres");
            return setDisplayFormErr(true);
        }
        try {
            const user = await signup({nombre,edad,telefono,email,password})
            setUser(user);
            setSuccessMessage("Registro Exitoso");
            setIsLoading(true); 

        } catch (error) {
            setErrorMessage(error.message);
            setDisplayFormErr(true);    
        }
        
        //AQUI 
    }

    //REACT NAVIGATION
    return (
        <View style={styles.mainView}>
            <View style={styles.TopView}>
                <Image style={styles.ImageStyle} source={require('../assets/images/letras.png')}/>
            </View>
            <ScrollView style={styles.BottomView}>
                <BackIcon onPress={navigate} style={styles.Icon} name="chevron-left" size={60} color="#fff"/>
                <Text style={styles.Heading}>
                    Crear{'\n'}
                    cuenta
                </Text>
                <View style={styles.FormView}>
                    <TextInput value={nombre} placeholder={"Nombre"} placeholderTextColor={"#fff"} style={styles.TextInput} onChangeText={guardarNombre}/>
                    <TextInput placeholder={"Edad"} placeholderTextColor={"#fff"} style={styles.TextInput} onChangeText={ text => guardarEdad(text)}/>
                    <TextInput placeholder={"Telefono"} placeholderTextColor={"#fff"} style={styles.TextInput} onChangeText={ text => guardarTelefono(text)}/>
                    <TextInput placeholder={"Email"} placeholderTextColor={"#fff"} style={styles.TextInput} onChangeText={text => guardarEmail(text)}/>
                    <TextInput placeholder={"Contraseña*"} secureTextEntry={true} placeholderTextColor={"#fff"} style={styles.TextInput} onChangeText={ text => guardarPassword(text)}/>
                    <TouchableOpacity onPress={validatForm} style={styles.Button}>
                        <Text style={styles.ButtonText}>Registrate</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            {displayFormErr == true?
                <FormError hideErrOverlay={setDisplayFormErr} err={errMessage}/>
                :
                null
            }
            
            {isLoading == true?
                <FormSuccess hideSuccesOverlay={setIsLoading} succ={succesMessage}/>
                :
                null
            }
     </View>
    );
}
export default CrearCuenta;

const styles = StyleSheet.create({
    mainView:{
        marginTop:40,
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    TopView:{
        width:'100%',
        height:'20%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    BottomView:{
        //CUADRO DE COLOR AZUL
        width:'100%',
        height:'85%',
        backgroundColor:'#ff4500',
        borderTopLeftRadius:30,
        borderTopRightRadius:30
    },
    ImageStyle:{
        width:'60%',
        resizeMode:'contain'

    },
    Heading:{
        //LETRAS DE BIENVENIDO
        color:'#fff',
        fontSize:50,
        fontWeight:'bold',
        marginLeft:30,
        marginTop:5
    },
    FormView:{
        //CUADROS DEL TEXTO
        width:'100%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        marginTop:30
    },
    TextInput:{
        //BORDES DEL CUADRODEL TEXTO
        width:'90%',
        borderWidth:3,
        borderColor:'#fff',
        height:52,
        borderRadius:10,
        paddingLeft:10,
        marginTop:20,
        color:'#fff'
    },
    Button:{
        //DISEÑO BOTON 
        width:'90%',
        color:'#000',
        height:52,
        backgroundColor:'#fff',
        borderRadius:10,
        marginTop:20,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    ButtonText:{
        //LETRAS DEL BOTON
        fontWeight:'bold',
        fontSize:18
    },
    CrearCuentaText:{
        //COLOR DE TEXTO REGISTRATE
        color:'gray'
    },
    TextButton:{
        width:'100%',
        display:'flex',
        alignItems:'center',
        marginTop:20
    },
    Icon:{
        //DISEÑO FLECHA DE REGRESO IZQUIERDA
        marginLeft:5,
        marginTop:10

    }
})
