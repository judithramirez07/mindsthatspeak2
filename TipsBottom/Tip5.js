import React,{useState,useEffect,useContext} from "react";
import { Text,StyleSheet,View,Image,ScrollView,SafeAreaView} from 'react-native';

const Tip5 = () => {
    return(
        <SafeAreaView>
            <ScrollView style={styles.mainView}>
                <View>
                    <Image style={{height:370,width:'120%',alignSelf:'center',marginRight:20,resizeMode:'contain'}} source={require('../assets/images/Popote.gif')}/>
                </View>
                <View style={styles.card}>
                    <Text style={styles.body}>• Jugar al fútbol con palillos.</Text>
                    <Text style={styles.body}>• Para lo que necesitarás bolitas de papel y dos palillos.</Text>
                    <Text style={styles.body}>• El objetivo es soplarlas a través de ellos y meterlas en la portería.</Text>
                </View>
            </ScrollView>
        </SafeAreaView>  
    );
}
export default Tip5;
const styles = StyleSheet.create({
    mainView:{
        backgroundColor:'#fff'

    },
    card:{
        borderRadius: 28,
        padding: 16,
        backgroundColor:"#ffc0cb",
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