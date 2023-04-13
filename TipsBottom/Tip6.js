import React from "react";
import { Text,StyleSheet,View,Image,ScrollView,SafeAreaView} from 'react-native';

const Tip6 = () => {
    return(
        <SafeAreaView>
            <ScrollView style={styles.mainView}>
                <View>
                    <Image style={{height:370,width:'120%',alignSelf:'center',marginRight:20,resizeMode:'contain'}} source={require('../assets/images/Boca.gif')}/>
                </View>
                <View style={styles.card}>
                    <Text style={styles.body}>• Este ejercicio consiste en meter y sacar la lengua sin tocar los labios</Text>
                    <Text style={styles.body}>• Pasarla lo más lejos que pueda</Text>
                    <Text style={styles.body}>• Luego, meterla y sacarla otra vez hasta llegar a 20 repeticiones.</Text>
                    <Text style={styles.body}>• Anímalo a interactuar con la velocidad, de rápido a despacio.</Text>
                </View>
            </ScrollView>
        </SafeAreaView>  
         
    );
}
export default Tip6;

const styles = StyleSheet.create({
    mainView:{
        backgroundColor:'#fff'

    },
    card:{
        borderRadius: 28,
        padding: 16,
        backgroundColor:"#add8e6",
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