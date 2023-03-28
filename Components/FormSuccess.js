import React from "react";
import {Text,View,ActivityIndicator,StyleSheet,Image,TouchableOpacity} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import {Overlay} from 'react-native-elements'

const FormSuccess = (props) =>{
    const navigation = useNavigation();
    function navigate(){
        navigation.navigate('login');
    }
    return(
            <Overlay overlayStyle={styles.Overlay} isVisible={true} onBackdropPress={()=>props.hideSuccesOverlay(false)}>
                <Image style={styles.succesIcon} source={require('../assets/images/alertExito.png')}/>
                <Text style={styles.succeMessage}>
                    {props.succ}
                </Text>
                <TouchableOpacity onPress={navigate} style={styles.Button}>
                    <Text style={styles.buttonText}>OK</Text>
                </TouchableOpacity>
            </Overlay>
    )
}
export default FormSuccess;

const styles = StyleSheet.create({
    Overlay:{
        //CUADRO DE ALERTA EXITO
        width:'90%',
        height:320,
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    succesIcon:{
        width:72,
        height:72
    },
    succeMessage:{
        //LETRAS DE ERROR
        color:'#000',
        fontSize:20,
        marginTop:20,
        textAlign:'center'
    },
    buttonText:{
        color:"white"
    },
    Button:{
        //DISEÑO BOTON OK
        width:280,
        color:'#000',
        height:51,
        backgroundColor:'#000',
        borderRadius:5,
        marginTop:20,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }
})