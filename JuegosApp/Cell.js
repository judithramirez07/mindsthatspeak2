import { func } from "prop-types";
import React,{useState} from "react";
import { Text,StyleSheet,View,Image,TouchableOpacity,ScrollView} from 'react-native';


export default function Cell({row,col,isHidden,letter,handleClick}){
    const [hasWon,setHasWon]= useState(false);
    const [incorrect,setIncorrect]=useState(false);

    function handleCelll(){
        if(isHidden){
            setHasWon(true);
            setTimeout(()=>{
                setHasWon(false);
            },500);

        }else{
            setIncorrect(true);
            setTimeout(()=>{
                setIncorrect(false);
            },500);
        }
        //handleClick(row,col);
    }
    
    return(
        <Text onPress={() => handleClick(row,col)} style={styles.cell}>{letter}</Text>
    );
}
const styles = StyleSheet.create({
    cell:{
        width:'20%',
        height:'20%',

    },
    hasWonLetter:{
        color: 'green'
    },
    incorrect:{
        color:'orange'
    }
})