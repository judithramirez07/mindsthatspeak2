import React,{useState,useContext,useEffect,useRef} from "react";
import { View,Text,StyleSheet,Button,ScrollView,Image,TextInput,TouchableOpacity, Alert} from 'react-native';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { authentication } from "../Firebase/firebase";
import { signin } from "../Firebase/firebase";
import { validateEmail,removeWhitespace } from "../utils";
import { UserContext,ProgressContext } from "../contexts";
import FormError from "../Components/FormError";

const Login = ({navigation}) => {
    function navigate(){
        navigation.navigate('crearCuenta');
    }
    const[email, guardarEmail]= useState('');
    const[password, guardarPassword]= useState('');
    const[errMessage,setErrorMessage]= useState('');
    const[displayFormErr, setDisplayFormErr]= useState(false);
    const { setUser } = useContext(UserContext);
    const refPassword = useRef(null);

    // useEffect(()=>{
    //     setDisplayFormErr(!(email && password && !errMessage));
    // },[email,password,errMessage])

    //  const handleEmailChange = email =>{
    //     const changeEmail = removeWhitespace(email);
    //     guardarEmail(changeEmail);
    //     setErrorMessage(
    //         validateEmail(changeEmail) ? '' : 'Porfavor verifique su correo electrónico'
    //     );
    //  }
    //  const handlePasswordChange = password =>{
    //     guardarPassword(removeWhitespace(password));
    //  }

     //CUANDO EL USUARIO PRESIONA EN INICIAR SESION
     const handleSubmit = async () =>{
        var form_inputs = [email,password];
        if(form_inputs.includes('') || form_inputs.includes(undefined)){
           setErrorMessage("Todos los campos son obligatorios");
           return setDisplayFormErr(true);
        }

        try {
            //autenticar usuario
           const user = await signin({email,password});
           setUser(user);

            //REDIRECCIONAR A HOME
            navigation.navigate('main');
        } catch (error) {
            //si hay un error mostrarlo
            setErrorMessage(error.message);
            setDisplayFormErr(true);
        }
     }

    return (
            <View style={styles.mainView}>
               <View style={styles.TopView}>
                 <Image style={styles.ImageStyle} source={require('../assets/images/letras.png')}/>
               </View>
               <ScrollView style={styles.BottomView}>
                    <Text style={styles.Heading}>
                        Bienvenido
                    </Text>
                    <View style={styles.FormView}>
                        <TextInput placeholder={"Email"} placeholderTextColor={"#fff"} style={styles.TextInput} returnKeyType="next" value={email} onChangeText={texto => guardarEmail(texto)}/>
                        <TextInput placeholder={"Contraseña*"} secureTextEntry={true} placeholderTextColor={"#fff"} style={styles.TextInput} returnKeyType="done" value={password} onChangeText={texto => guardarPassword(texto)}/>
                        <TouchableOpacity onPress={handleSubmit} style={styles.Button}>
                            <Text style={styles.ButtonText}>Iniciar Sesión</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.TextButton} onPress={navigate}>
                        <Text style={styles.CrearCuentaText}>Registrate</Text>
                    </TouchableOpacity>
               </ScrollView>
                {displayFormErr == true?
                    <FormError hideErrOverlay={setDisplayFormErr} err={errMessage}/>
                    :
                    null
                }
            </View>
    );
}
export default Login;

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
        height:'30%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    BottomView:{
        //CUADRO DE COLOR AZUL
        width:'100%',
        height:'70%',
        backgroundColor:'#6495ed',
        borderTopLeftRadius:30,
        borderTopRightRadius:30
    },
    ImageStyle:{
        width:'70%',
        resizeMode:'contain'

    },
    Heading:{
        //LETRAS DE BIENVENIDO
        color:'#fff',
        fontSize:50,
        fontWeight:'bold',
        marginLeft:30,
        marginTop:60
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
        color:'white'
    },
    TextButton:{
        width:'100%',
        display:'flex',
        alignItems:'center',
        marginTop:20
    }
})
