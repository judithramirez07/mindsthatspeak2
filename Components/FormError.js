import React from "react";
import {StyleSheet, Text,View,Image,TouchableOpacity} from 'react-native';
import {Overlay} from 'react-native-elements'

const FormError = (props) =>{
    return(
        <Overlay overlayStyle={styles.Overlay} isVisible={true} onBackdropPress={()=>props.hideErrOverlay(false)}>
            <Image style={styles.errorIcon} source={require('../assets/images/alertError.png')}/>
            <Text style={styles.errorMessage}>
                {props.err}
            </Text>
            <TouchableOpacity style={styles.Button} onPress={()=>props.hideErrOverlay(false)}>
                <Text style={styles.buttonText}>OK</Text>
            </TouchableOpacity>
        </Overlay>
    )

}
export default FormError;

const styles = StyleSheet.create({
    Overlay:{
        //CUADRO DE ALERTA ERROR
        width:'90%',
        height:320,
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    errorIcon:{
        width:72,
        height:72
    },
    errorMessage:{
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