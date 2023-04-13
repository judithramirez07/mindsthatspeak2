import React from "react";
import { Text, Image,View,SafeAreaView,ScrollView,StyleSheet} from 'react-native';

const Tip3 = () =>{
    return(
        <SafeAreaView>
            <ScrollView style={styles.mainView}>
                <View>
                    <Image style={{height:370,width:'120%',alignSelf:'center',marginRight:20,resizeMode:'contain'}} source={require('../assets/images/Globo.gif')}/>
                </View>
                <Text style={styles.Heading}>Estos ejercicios ayudan a superar la tartamudez al fortificar los órganos fonadores</Text>
                <View style={styles.card}>
                    <Text style={styles.body}>• Intenta hacer la actividad divertida para tu hijo.</Text>
                    <Text style={styles.body}>• Por ejemplo, dale un globo para que lo infle.</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
export default Tip3;
const styles = StyleSheet.create({
    mainView:{
        backgroundColor:'#fff'

    },
    card:{
        borderRadius: 28,
        padding: 16,
        backgroundColor:"#90ee90",
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