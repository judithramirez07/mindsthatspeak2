import React from "react";
import { Text, Image,View,SafeAreaView,ScrollView,StyleSheet} from 'react-native';

const Tip1 = () =>{
    return(
        <SafeAreaView>
            <ScrollView style={styles.mainView}>
                <View>
                    <Image style={{height:370,width:'120%',alignSelf:'center',marginRight:70,resizeMode:'contain'}} source={require('../assets/images/LimonGif.gif')}/>
                </View>
                <Text style={styles.Heading}>Debe realizarse el ejercicio tres veces con cada mano.</Text>
                <View style={styles.card}>
                    <Text style={styles.body}>• Imagina que tienes un limón en tu mano izquierda,tienes que tratar de exprimirlo para sacarle todo el jugo.</Text>
                    <Text style={styles.body}>• Concéntrate en tu mano y en tu brazo, en cómo aprietan mientras intentas sacarle todo el zumo, en cómo se tensan.</Text>
                    <Text style={styles.body}>• Ahora deja caer el limón. Nota cómo están tus músculos cuando se relajan…</Text>
                    <Text style={styles.body}>• Vamos a tomar otro limón, pero lo vamos a exprimir con más fuerza que antes, muy muy fuerte, eso es. Mira qué tensos tienes la mano y el brazo.</Text>
                    <Text style={styles.body}>• Ya está exprimido, ahora déjalo caer. ¿Ves, fíjate qué bien estás cuando estás relajado?, qué bien están tu mano y tu brazo, ¿a qué te sientes mejor?</Text>
                    <Text style={styles.body}>• Vamos a tomar otro limón más, pero ahora tenemos que exprimirlo con mucha más fuerza que antes, esta vez no tiene que quedar ni una gota de zumo. Aprieta fuerte, más fuerte, que no quede nada…</Text>
                    <Text style={styles.body}>• Ahora vuelve a soltar el limón. Vuelve a notar tu mano y tu brazo, que relajados y que agusto está</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
export default Tip1;
const styles = StyleSheet.create({
    mainView:{
        backgroundColor:'#fff'

    },
    card:{
        borderRadius: 28,
        padding: 16,
        backgroundColor:"#ffa07a",
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