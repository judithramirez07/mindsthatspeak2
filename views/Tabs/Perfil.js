import React,{useState,useLayoutEffect,useEffect} from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text,StyleSheet,View,TouchableOpacity} from 'react-native';
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { signout } from "../../Firebase/firebase";
//import { signout,getAuth } from "firebase/auth";
import { authentication } from "../../Firebase/firebase";

const Perfil = () => {
    const navigation = useNavigation();
    // const [user, setUser] = useState(null);
    // useEffect(()=>{
    //     const unsubscribe = authentication.onAuthStateChanged((currentUser)=>{
    //         setUser(currentUser)
    //     });

    //     return unsubscribe;
    // }, []);
    // if(!user){
    //     return null;
    // }
 
    const handleLogout = async() =>{
        try {
            await signout();
            await navigation.navigate('login');
        } catch (error) {
            console.error(error);
        }
    }
    return(
        <View style={styles.mainView}>
             <TouchableOpacity onPress={handleLogout} style={styles.Button}>
             <Text style={styles.ButtonText}>Cerrar Sesión</Text>
             </TouchableOpacity>
        </View>
    );
}
export default Perfil;

const styles = StyleSheet.create({
    mainView:{
        marginTop:40,
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
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
})