import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text,StyleSheet,View,Image,ScrollView} from 'react-native';
import { Icon } from "react-native-elements";
import { color } from "react-native-elements/dist/helpers";

const Inicio = () => {
    return(
        <ScrollView style={styles.mainView}>
            <View style={styles.ImageStyle}>
                <Image style={styles.logo} source={require('../../assets/images/disfemia1.png')}/>
                <Image style={styles.ImageTarta} source={require('../../assets/images/tartamudez.png')}/>
            </View>
            <Text style={styles.Heading}>¿Qué es la Disfemia?</Text>
            <View style={styles.card}>
                <Text style={styles.body}>Es un trastorno de la fluidez del habla que se caracteriza por una expresión verbal 
                    interrumpida en su ritmo de un modo más o menos brusco. A este trastorno del ritmo del 
                    habla se añaden una serie de factores psicopatológicos que complican el cuadro y 
                    convierten la disfemia en un síndrome complejo y difícil de tratar.
                </Text>
            </View>
            <Text style={styles.Heading}>Síntomas</Text>
            <View style={styles.card}>
                <Text style={styles.body}>- Dificultad para comenzar una palabra, frase u oración.</Text>
                <Text style={styles.body}>- Prolongación de una palabra o sonido dentro de una palabra.</Text>
                <Text style={styles.body}>- Repetición de un sonido, sílaba o palabra.</Text>
                <Text style={styles.body}>- Silencio breve para ciertas sílabas o palabras, 
                      o pausas dentro de una palabra (separación de palabras).</Text>
                <Text style={styles.body}>- Uso de palabras adicionales como «eh...» en caso de dificultad. 
                      para continuar con la siguiente palabra.</Text>
                <Text style={styles.body}>- Tensión excesiva, rigidez o movimiento de la cara o la parte 
                      superior del cuerpo para pronunciar una palabra.</Text>
                <Text style={styles.body}>- Ansiedad por hablar.</Text>
                <Text style={styles.body}>- Capacidad limitada para comunicarse efectivamente</Text>
                <Text style={styles.body}>Las dificultades del habla del tartamudeo pueden estar acompañadas por:</Text>
                <Text style={styles.body}>- Parpadeo rápido.</Text>
                <Text style={styles.body}>- Temblor de los labios y la mandíbula.</Text>
                <Text style={styles.body}>- Tics faciales.</Text>
                <Text style={styles.body}>- Movimientos de cabeza.</Text>
                <Text style={styles.body}>- Puños cerrados.</Text>
            </View>
            <Text style={styles.Heading}>Conductas que se deben evitar</Text>
            <View style={styles.top}>
                <Text style={styles.header}>
                    - Interrumpir el discurso, Terminar las frases.
                    - Decirle que respire, que coja aire o que esté tranquilo,
                    los turnos de palabra rápidos en la conversación y 
                       con poco tiempo para que pueda incluir su intervención.
                </Text>
            </View>
            <Text style={styles.Heading}>Puntos de vista de experto</Text>
            <View style={styles.card}>
                <Text style={styles.pregunta}>¿Qué nos puedes decir sobre la disfemia?</Text>
                <Text style={styles.body}>La tartamudez o disfemia es un trastorno del habla que se caracteriza por interrupciones 
                de la fluidez del habla, bloqueos o espasmos, que se acompañan normalmente de tensión muscular en cara y cuello, 
                miedo y estrés. Este trastorno tiene su origen en diferentes factores orgánicos, psicológicos y sociales. 
                Importante aclarar que la disfemia no es un trastorno del lenguaje.
                </Text>
            </View>
            <View style={styles.card}>
                <Text style={styles.pregunta}>¿Ha tratado alguna vez a un niño con disfemia?</Text>
                <Text style={styles.body}>Si, aunque de manera indirecta; o sea, no por la disfemia, sino 
                por algún otro trastorno donde la disfemia acompañaba otro trastorno.
                </Text>
            </View>
            <View style={styles.card}>
                <Text style={styles.pregunta}>¿Ha tratado alguna vez a un niño con disfemia?</Text>
                <Text style={styles.body}>Si, aunque de manera indirecta; o sea, no por la disfemia, sino 
                por algún otro trastorno donde la disfemia acompañaba otro trastorno.
                </Text>
            </View>
            <View style={styles.card}>
                <Text style={styles.pregunta}>¿Recomienda usar los ejercicios que existen para ayudar a tratar a los niños con disfemia?</Text>
                <Text style={styles.body}>La disfemia o dificultad del habla se puede mejorar con ejercicios para superar la tartamudez. 
                Cuanto antes ayudes a tu hijo a realizar estas pruebas más rápido logrará controlarla.
                </Text>
            </View>
            <View style={styles.card}>
                <Text style={styles.pregunta}>¿Considera que los avances tecnológicos han influido en este trastorno del habla?</Text>
                <Text style={styles.body}>No, le veo poca implicación en este sentido. Sus orígenes pueden ser psicológicos o sociales,
                 pero no le veo mucha relación con la tecnología.</Text>
            </View>
            <View style={styles.card}>
                <Text style={styles.pregunta}>¿Cuál cree que son las consecuencias de no tratar la disfemia?</Text>
                <Text style={styles.body}>Generalmente, los niños se muestran inseguros, temerosos, con miedo de hablar, 
                de participar en actividades sociales. Se cohíben y se quedan al margen de muchas actividades.</Text>
            </View>
        </ScrollView>
    );
}
export default Inicio;
const styles = StyleSheet.create({
    mainView:{
        flex:1,
        backgroundColor:'#fff'

    },
    Heading:{
        fontSize:32,
        margin:5,
        marginLeft:15,
        fontWeight:'bold',
        color:'black',
    },
    logo:{
        alignSelf:'center',
        margin:15,
        width:'80%',
        resizeMode:'contain'
    },
    ImageStyle:{
        width:'100%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        marginTop:30,

    },
    ImageTarta:{
        alignSelf:'center',
        width:'100%',
        resizeMode:'contain',
        height:150,
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
    body:{
        fontSize:15,
        color:'#575757'
    },
    top:{
        alignItems:'center',
        justifyContent:'center'
    },
    header:{
        color:'#000',
        fontSize:15,
        borderColor:'#20b2aa',
        borderWidth:5,
        padding:10,
        paddingLeft:30,
        paddingRight:30,
        backgroundColor:'rgba(255,255,255, .1)'
    },
    pregunta:{
        fontSize:15,
        color:'#b22222',
        fontWeight:'bold'
    }
})