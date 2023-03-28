import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View,StyleSheet,Image,TextInput,TouchableOpacity} from 'react-native';
//import BottonMain from "./BottonMain";

const Main = ({navigation}) => {
    function navigate(){
        navigation.navigate('bottonMain');
    }
    return(
        <View style={styles.mainView}>
               <View style={styles.TopView}>
                 <Image style={styles.ImageStyle} source={require('../assets/images/pensar.jpg')}/>
               </View>
               <View style={styles.FormView}>
                    <TouchableOpacity style={styles.Button} onPress={navigate}>
                        <Text style={styles.ButtonText}>EMPEZEMOS</Text>
                    </TouchableOpacity>
               </View>
        </View>
    );
}
export default Main;

const styles = StyleSheet.create({
    mainView:{
        marginTop:10,
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff'
    },
    TopView:{
        width:'100%',
        height:'30%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff'
    },
    ImageStyle:{
        width:'70%',
        resizeMode:'contain'

    },
    FormView:{
        //CUADROS DEL TEXTO
        width:'100%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        marginTop:80
    },
    TextInput:{
        //BORDES DEL CUADRODEL TEXTO
        width:'90%',
        borderWidth:3,
        borderColor:'#ff69b4',
        height:52,
        borderRadius:10,
        paddingLeft:10,
        marginTop:20,
        color:'#ff69b4'
    },
    Button:{
        //DISEÑO BOTON 
        width:'90%',
        color:'#000',
        height:52,
        backgroundColor:'#ff69b4',
        borderRadius:10,
        marginTop:20,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    ButtonText:{
        //LETRAS DEL BOTON
        fontWeight:'bold',
        fontSize:18,
        color:'#fff'
    },
});