import React from "react";
import { Text, Image,View,SafeAreaView,ScrollView,StyleSheet} from 'react-native';

const Tip4 = () =>{
    return(
        <SafeAreaView>
            <ScrollView style={styles.mainView}>
                <View>
                    <Image style={{height:370,width:'120%',alignSelf:'center',marginRight:20,resizeMode:'contain'}} source={require('../assets/images/Velas.gif')}/>
                </View>
                <View style={styles.card}>
                    <Text style={styles.body}>• Puedes encender varias velas y jugar a ver quién apaga más, solo con un soplido.</Text>
                    <Text style={styles.body}>• Ayudara a fortificar los órganos fonadores.</Text>
                </View>
            </ScrollView>
        </SafeAreaView>  
    );
}
export default Tip4;
const styles = StyleSheet.create({
    mainView:{
        backgroundColor:'#fff'

    },
    card:{
        borderRadius: 28,
        padding: 16,
        backgroundColor:"#fafad2",
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