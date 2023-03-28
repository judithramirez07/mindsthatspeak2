import React,{useState,useEffect,useContext} from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { Text,StyleSheet,View,Image,ScrollView,SafeAreaView} from 'react-native';
import { Icon } from "react-native-elements";
//import { SafeAreaView } from "react-native-safe-area-context";

const Tips = (props) => {
    const navigation = useNavigation();
    return(
            <SafeAreaView>
                <ScrollView>
                    <View style={{paddingHorizontal:18,backgroundColor:'#fff'}}>
                        <View style={styles.card}>
                            <Text onPress={()=>props.navigation.navigate('tip1')} style={styles.title}>El juego del limón: manos y brazos</Text>
                            <Image style={styles.poster} source={require('../../assets/images/limon.jpg')}/>
                        </View>
                        <View style={styles.card}>
                            <Text style={styles.title}>Respiración diafragmática</Text>
                            <Image style={styles.poster} source={require('../../assets/images/respiracion.jpg')}/>
                        </View>
                        <View style={styles.card}>
                            <Text style={styles.title}>Ejercicios de soplo - Globo</Text>
                            <Image style={styles.poster} source={require('../../assets/images/globo.jpg')}/>
                        </View>
                        <View style={styles.card}>
                            <Text style={styles.title}>Ejercicios de soplo - Velas</Text>
                            <Image style={styles.poster} source={require('../../assets/images/velas.jpg')}/>
                        </View>
                        <View style={styles.card}>
                            <Text style={styles.title}>Ejercicios de soplo - Popote</Text>
                            <Image style={styles.poster} source={require('../../assets/images/popote2.jpg')}/>
                        </View>
                        <View style={styles.card}>
                            <Text style={styles.title}>Movimiento de la lengua y los labios</Text>
                            <Image style={styles.poster} source={require('../../assets/images/lengua.jpg')}/>
                        </View>
                        <View style={styles.card}>
                            <Text style={styles.title}>Movimiento de la lengua y nariz</Text>
                            <Image style={styles.poster} source={require('../../assets/images/nariz.jpg')}/>
                        </View>
                        <View style={styles.card}>
                            <Text style={styles.title}>Propiciar la conversación</Text>
                            <Image style={styles.poster} source={require('../../assets/images/conversando.jpg')}/>
                        </View>
                        <View style={styles.card}>
                            <Text style={styles.title}>Alargar las vocales</Text>
                            <Image style={styles.poster} source={require('../../assets/images/vocales.jpg')}/>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
    );
}
export default Tips;
const styles = StyleSheet.create({
    poster:{
        height:375,
        width:'100%',
        marginTop: 20,
        borderRadius: 14,
    },
    card:{
        borderRadius: 28,
        padding: 16,
        backgroundColor:"white",
        marginVertical:30,
        elevation:8,
        shadowColor:"#000",
        shadowRadius:6,
        textShadowOffset:{height:6,width: 0},
        shadowOpacity: 0.1,
    },
    title:{
        fontSize:26,
        fontWeight:"900",
        marginBottom:8,
        color:'#383838'
    }
})