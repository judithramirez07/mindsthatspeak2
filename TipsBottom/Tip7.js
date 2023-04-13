import React from "react";
import { Text,StyleSheet,View,Image,ScrollView,SafeAreaView} from 'react-native';

const Tip7 = () => {
    return(
        <SafeAreaView>
            <ScrollView style={styles.mainView}>
                <View>
                    <Image style={{height:370,width:'120%',alignSelf:'center',marginRight:20,resizeMode:'contain'}} source={require('../assets/images/Lengua-nariz.gif')}/>
                </View>
                <View style={styles.card}>
                    <Text style={styles.body}>• Intenta tocar la nariz con la lengua.</Text>
                    <Text style={styles.body}>• De esta manera, se fortalecerá y le será más fácil moverla de forma adecuada.</Text>
                </View>
            </ScrollView>
        </SafeAreaView>  
    );
}
export default Tip7;
const styles = StyleSheet.create({
    mainView:{
        backgroundColor:'#fff'

    },
    card:{
        borderRadius: 28,
        padding: 16,
        backgroundColor:"#dda0dd",
        marginVertical:30,
        elevation:8,
        shadowColor:"#000",
        shadowRadius:6,
        textShadowOffset:{height:6,width: 0},
        shadowOpacity: 0.1,
    },
    body:{
        fontSize:15,
        color:'#575757'
    },
    Heading:{
        fontSize:20,
        margin:5,
        marginLeft:15,
        fontWeight:'bold',
        color:'black',
    },
})