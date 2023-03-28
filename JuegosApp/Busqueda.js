import React,{useState,useEffect} from "react";
import { Text,StyleSheet,View,Image,TouchableOpacity,ScrollView} from 'react-native';
import { createBoard } from "../utilidades/createBoard";
import Cell from "./Cell";

const Busqueda = () =>{
    const [board, setBoard] = useState(()=> createBoard());
    const [gamesToWin,setGamesToWin] = useState(3);
    const [timer, setTimer] = useState(0);
    const miliseconds = (timer / 10).toFixed(2);

    useEffect(()=>{
        if(gamesToWin>0){
            const interval = setInterval(()=>{
                setTimer(timer + 1)
            }, 100)
            return () => clearInterval(interval);
        }

    },[gamesToWin,timer])

    function handleClick(row,col){
        if(board[row][col].isHidden){
            setGamesToWin(gamesToWin - 1);
            setTimeout(() => {
                setBoard(createBoard());
            },500);
        }
    }
    return(
        <View style={styles.container}>
            {gamesToWin > 0 && <Text style={styles.title}>Timer: {miliseconds}</Text>}
            {gamesToWin === 0 ?(
                <Text style={styles.title}>Felicidades, tu tiempo fue:{miliseconds}</Text>
            ) : (
                <Text style={styles.title}>Juegos por Ganar: {gamesToWin}</Text>
            )}
            {gamesToWin > 0 && 
                <View>
                    {board.map((row, rowIdx)=>(
                        <Text key={rowIdx} style={styles.row}>
                            {row.map((letter, letterIdx)=>(
                                <Cell key={letterIdx} handleClick={handleClick} {...letter}/>
                        ))}
                        </Text>
                    ))}
                </View>
            }
        </View>
    );

}

export default Busqueda;
const styles = StyleSheet.create({
    container:{
        display:'flex',
        flex:1,
        flexDirection:'column',
        textAlign:'center',
        backgroundColor:"#0f172a",
        alignItems:"center",
        justifyContent:"center",
    },
    title:{
        fontSize:20,
        color:"white",
        fontWeight:"900"
    },
    row:{
        display:'flex',
    }
})
