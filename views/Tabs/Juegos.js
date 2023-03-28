import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text,StyleSheet,View,Image,TouchableOpacity,ScrollView} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Icon } from "react-native-elements";

const Juegos = (props) => {
    const navigation = useNavigation();
    // function navigate(){
    //     navigation.navigate('memorama');
    // }
    return(
        <View style={styles.mainView}>
                <View style={styles.TopView}>
                    <Image style={styles.ImageStyle} source={require('../../assets/images/juegos.png')}/>
                </View>
                <ScrollView style={styles.BottomView}>
                    <View style={styles.gameView}>
                            <TouchableOpacity style={styles.Button} onPress={()=>props.navigation.navigate('animales')}>
                                <Text style={styles.ButtonText}>Sonidos de Animales</Text>
                            </TouchableOpacity>
                    </View>
                    <View style={styles.gameView}>
                            <TouchableOpacity style={styles.Button2} onPress={()=>props.navigation.navigate('memorama')}>
                                <Text style={styles.ButtonText2}>Memorama</Text>
                            </TouchableOpacity>
                    </View>
                    <View style={styles.gameView}>
                            <TouchableOpacity style={styles.Button3} onPress={()=>props.navigation.navigate('busqueda')}>
                                <Text style={styles.ButtonText3}>Busqueda</Text>
                            </TouchableOpacity>
                    </View>
                </ScrollView>
        </View>
    );
}
export default Juegos;
const styles = StyleSheet.create({
    mainView:{
        flex:1,
        marginTop:10,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff'

    },
    Heading:{
        fontSize:32,
        marginTop:60,
        marginLeft:15,
        fontWeight:'bold',
        backgroundColor:'#fff'
    },
    TopView:{
        width:'100%',
        height:'30%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    ImageStyle:{
        width:'80%',
        resizeMode:'contain'

    },
    BottomView:{
        //CUADRO DE COLOR AZUL
        width:'100%',
        height:'50%',
    },
    Button:{
        //DISEÑO BOTON DE SONIDOS 
        width:'90%',
        color:'#000',
        height:80,
        backgroundColor:'#ffd700',
        borderRadius:10,
        marginTop:10,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        shadowColor:'black',
    },
    ButtonText:{
        //LETRAS DEL BOTON SONIDOS
        fontWeight:'bold',
        fontSize:25,
        color:'#fff'
    },
    gameView:{
        //CUADROS DEL TEXTO
        width:'100%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        marginTop:40
    },
    Button2:{
        //DISEÑO BOTON DE Memorama 
        width:'90%',
        color:'#000',
        height:80,
        backgroundColor:'#ff1493',
        borderRadius:10,
        marginTop:10,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        shadowColor:'black'

    },
    ButtonText2:{
        //LETRAS DEL BOTON MEMORAMA
        fontWeight:'bold',
        fontSize:25,
        color:'#fff'
    },
    Button3:{
        //DISEÑO BOTON DE BUSQUEDA
        width:'90%',
        color:'#000',
        height:80,
        backgroundColor:'#9370db',
        borderRadius:10,
        marginTop:10,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'

    },
    ButtonText3:{
        //LETRAS DEL BOTON BUSQUEDA
        fontWeight:'bold',
        fontSize:25,
        color:'#fff'
    },
})