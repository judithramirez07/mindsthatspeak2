import React,{useState,useEffect,useContext} from "react";
import { Text,StyleSheet,View,Image,ScrollView,SafeAreaView} from 'react-native';

const Tip2 = () => {
    return(
        <SafeAreaView>
            <ScrollView style={styles.mainView}>
                <View>
                    <Image style={{height:370,width:'120%',alignSelf:'center',marginRight:20,resizeMode:'contain'}} source={require('../assets/images/Respiracions.gif')}/>
                </View>
                <View style={styles.card}>
                    <Text style={styles.body}>• El niño entenderá que debe trabajar la respiración como lo hace al cantar.</Text>
                    <Text style={styles.body}>• Ayúdalo a realizar ejercicios de respiración diafragmática.</Text>
                    <Text style={styles.body}>• Muéstrale cómo hacer una respiración profunda de modo que el aire se expanda al diafragma o a la tripa.</Text>
                    <Text style={styles.body}>• Antes de hablar debe hacer dos respiraciones profundas como si fuera a sumergirse al agua, tomar todo el aire posible y retenerlo unos segundos en el diafragma.</Text>
                    <Text style={styles.body}>• Por último, exhalar despacio.</Text>
                    <Text style={styles.body}>• Para que le resulte más fácil hazlo tú primero.</Text>
                </View>
            </ScrollView>
        </SafeAreaView>   
    );
}
export default Tip2;
const styles = StyleSheet.create({
    mainView:{
        backgroundColor:'#fff'

    },
    card:{
        borderRadius: 28,
        padding: 16,
        backgroundColor:"#ffb6c1",
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