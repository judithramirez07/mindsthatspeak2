import React,{useState,useEffect} from "react";
import { Text, Image,View,ScrollView,TouchableOpacity,SafeAreaView,StyleSheet, FlatList} from 'react-native';
import Sound from "react-native-sound";

// const soundList =[
//     {
//         id:1,
//         imagen: require("../assets/images/perro.png"),
//         sonido: require("../Sonidos/ladridos.mp3"),
//     },
//     {
//         id:2,
//         imagen: require("../assets/images/gato.jpg"),
//         sonido: require("../Sonidos/maullido.mp3"),   
//     },
//     {
//         id:3,
//         imagen: require("../assets/images/pollito.jpg"),
//         sonido: require("../Sonidos/pollitoS.mp3"),   
//     },
//     {
//         id:4,
//         imagen: require("../assets/images/elefante.jpg"),
//         sonido: require("../Sonidos/elefanteS.mp3"),   
//     },
    

// ];

const Animales = () =>{
    const soundList =[
        {nombre: 'sonido1', archivo: require('../Sonidos/ladridos.mp3')},
        {nombre: 'sonido2', archivo: require('../Sonidos/maullido.mp3')},
        {nombre: 'sonido3', archivo: require('../Sonidos/elefanteS.mp3')},
        {nombre: 'sonido4', archivo: require('../Sonidos/pollitoS.mp3')},
        {nombre: 'sonido5', archivo: require('../Sonidos/patoS.mp3')},
        {nombre: 'sonido6', archivo: require('../Sonidos/galloS.mp3')},
        {nombre: 'sonido7', archivo: require('../Sonidos/changoS.mp3')},
        {nombre: 'sonido8', archivo: require('../Sonidos/vacaS.mp3')},
        {nombre: 'sonido9', archivo: require('../Sonidos/abejaS.mp3')},
        {nombre: 'sonido10', archivo: require('../Sonidos/obejaS.mp3')},
        {nombre: 'sonido11', archivo: require('../Sonidos/cerdoS.mp3')},
        {nombre: 'sonido12', archivo: require('../Sonidos/ranaS.mp3')},
    ];
    
    function cargarSonidos(){
        const sonidosCargados ={};
        soundList.forEach((sonido) =>{
            sonidosCargados[sonido.nombre]= new Sound(sonido.archivo, Sound.MAIN_BUNDLE, (error)=>{
                if(error){
                    console.log(`Error al cargar el archivo de sonido ${sonido.nombre}`, error);
                }
            });
        });
        return sonidosCargados;
    
    }

    const [sonidosCargados, setSonidosCargados]=useState(null);

    useEffect(()=>{
        setSonidosCargados(cargarSonidos());
    },[])

    return(
        <ScrollView>
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>sonidosCargados.sonido1.play()}>
                    <Image style={styles.image} source={require('../assets/images/perro.png')}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>sonidosCargados.sonido2.play()}>
                    <Image style={styles.image} source={require('../assets/images/gato.jpg')}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>sonidosCargados.sonido3.play()}>
                    <Image style={styles.image} source={require('../assets/images/elefante.jpg')}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>sonidosCargados.sonido4.play()}>
                    <Image style={styles.image} source={require('../assets/images/pollito.jpg')}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>sonidosCargados.sonido5.play()}>
                    <Image style={styles.image} source={require('../assets/images/pato.jpg')}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>sonidosCargados.sonido6.play()}>
                    <Image style={styles.image} source={require('../assets/images/gallo.jpg')}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>sonidosCargados.sonido7.play()}>
                    <Image style={styles.image} source={require('../assets/images/chango.jpg')}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>sonidosCargados.sonido8.play()}>
                    <Image style={styles.image} source={require('../assets/images/vaca.jpg')}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>sonidosCargados.sonido9.play()}>
                    <Image style={styles.image} source={require('../assets/images/abeja.jpg')}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>sonidosCargados.sonido10.play()}>
                    <Image style={styles.image} source={require('../assets/images/obeja.jpg')}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>sonidosCargados.sonido11.play()}>
                    <Image style={styles.image} source={require('../assets/images/puerco.jpg')}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>sonidosCargados.sonido12.play()}>
                    <Image style={styles.image} source={require('../assets/images/rana.jpg')}/>
                </TouchableOpacity>
        </View>
       </ScrollView>
    );
}
export default Animales;

const styles = StyleSheet.create({
    Button:{
        //DISEÑO BOTON 
        width:'90%',
        color:'#000',
        height:52,
        backgroundColor:'#6495ed',
        borderRadius:10,
        margin:50,
        marginLeft:4,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    ButtonText:{
        //LETRAS DEL BOTON
        fontWeight:'bold',
        fontSize:18,
        color:'#fff'
    },
    container:{
        flexDirection:'row',
        flex:2,
        flexWrap:'wrap',
        justifyContent:'space-around',
        alignItems:'center',
        marginTop:10,
        marginVertical:10,
        backgroundColor:'#fff',
    },
    image:{
        width:100,
        height:220,
        resizeMode:"contain",
        margin:6,
    }
})