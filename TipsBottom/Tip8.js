import React from "react";
import { Text,StyleSheet,View,Image,ScrollView,SafeAreaView} from 'react-native';

const Tip8 = () => {
    return(
        <SafeAreaView>
            <ScrollView style={styles.mainView}>
                <View>
                    <Image style={{height:370,width:'120%',alignSelf:'center',marginRight:20,resizeMode:'contain'}} source={require('../assets/images/Platica.gif')}/>
                </View>
                <View style={styles.card}>
                    <Text style={styles.body}>• Procura mantener sesiones de conversación relajada con el niño.</Text>
                    <Text style={styles.body}>• Bien a partir de lecturas comentadas o visualizando películas dejando momentos para intercambiar opiniones.</Text>
                    <Text style={styles.body}>• En otras palabras seleccionar actividades que propicien la conversación.</Text>
                    <Text style={styles.body}>• Debes prestar mas atención al contenido de lo que el niño dice y evitar presionarlo en los errores.</Text>
                    <Text style={styles.body}>• Hay que procurar la producción espontánea de lenguaje del niño.</Text>
                </View>
            </ScrollView>
        </SafeAreaView>    
    );
}
export default Tip8;
const styles = StyleSheet.create({
    mainView:{
        backgroundColor:'#fff'

    },
    card:{
        borderRadius: 28,
        padding: 16,
        backgroundColor:"#d3d3d3",
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