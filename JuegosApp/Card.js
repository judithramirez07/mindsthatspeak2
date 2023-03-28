import React from "react";
import { Pressable,Text,StyleSheet } from "react-native";

export default function Card({onPress,isTurnedOver,children}){
    return(
        <Pressable onPress={onPress} style={isTurnedOver ? styles.cardUp : styles.carDown}>
            {isTurnedOver ? (
             <Text style={styles.text}>{children}</Text>
            ):(
             <Text style={styles.text}>?</Text>
            )}
        </Pressable>
    )
}

const styles = StyleSheet.create({
    //Tarjeta hacia arriba
    cardUp:{
        width:100,
        height:100,
        margin:10,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:25,
        paddingLeft:10,
        backgroundColor:"#1e293b",
        borderWidth:10,
        borderColor:"#334155",

    },
    carDown:{
        width:100,
        height:100,
        margin:10,
        borderWidth:10,
        borderColor:"#334155",
        alignItems:'center',
        justifyContent:'center',
        borderRadius:25,
        paddingLeft:10,
        backgroundColor:"#1e293b"

    },
    text:{
        fontSize:46,
        color:"#334155",
        justifyContent:'center',
        alignItems:'center',
    }
})