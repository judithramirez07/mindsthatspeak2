import React from "react";
import { Text,StyleSheet,View,Image,ScrollView,SafeAreaView} from 'react-native';

const Tip9 = () => {
    return(
        <SafeAreaView>
            <ScrollView style={styles.mainView}>
                <View>
                    <Image style={{height:370,width:'120%',alignSelf:'center',marginStart:10,marginLeft:80,resizeMode:'contain'}} source={require('../assets/images/vocales2.gif')}/>
                </View>
                <View style={styles.card}>
                    <Text style={styles.body}>• Tomar conciencia de las palabras antes de que sean efectivamente pronunciadas.</Text>
                    <Text style={styles.body}>• Y al hacer lo anterior sea con lentitud, los padres y los niños deben ensayar a alargar las vocales.</Text>
                    <Text style={styles.body}>• La estrategia base es darle al niño modelos de hablar lento y relajado.</Text>
                    <Text style={styles.body}>• Sería interesante sincronizar el habla del menor siguiendo un ritmo , incluso marcado con un metrónomo.</Text>
                </View>
            </ScrollView>
        </SafeAreaView> 
    );
}
export default Tip9;
const styles = StyleSheet.create({
    mainView:{
        backgroundColor:'#fff'

    },
    card:{
        borderRadius: 28,
        padding: 16,
        backgroundColor:"#f0e68c",
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