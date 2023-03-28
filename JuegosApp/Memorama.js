import React,{useEffect, useState} from 'react';
import { Text,StyleSheet,View,Image,Button} from 'react-native';
import Card from './Card';

const cards=[
    "🐘",
    "🐢",
    "🐸",
    "🍌",
    "🍭",
    "🍪",

];

const Memorama = () =>{
    const [board,setBoard] = useState(()=>shuffled([...cards,...cards]))
    const [selectedCards, setSelectCards] = useState([]);
    const [matchedCrads, setMatchedCards] = useState([]);
    const [score, setScore] = useState(0);

    useEffect(()=> {
        if(selectedCards.length < 2) return;
        if(board[selectedCards[0]] === board[selectedCards[1]]){
            setMatchedCards([...matchedCrads, ...selectedCards])
            setSelectCards([]);
        }else{
            const timeoutId = setTimeout(() => setSelectCards([]) ,1000);
            return () => clearTimeout(timeoutId);
        }
    }, [selectedCards])

    const handleTapCard = index =>{
        if(selectedCards.length>= 2 || selectedCards.includes(index)) return;
        setSelectCards([...selectedCards,index]);
        setScore(score + 1);
    };

    const didPlayaerWin = () => matchedCrads.length === board.length;

    const resetGame = () => {
        setMatchedCards([]);
        setScore(0);
        setSelectCards([]);
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>{didPlayaerWin() ? "Felicidades 🥇" : "Memorama"}</Text>
            <Text style={styles.title}>Puntaje: {score}</Text>
            <View style={styles.board}>
                {board.map((card,index)=>{
                    const isTurnedOver = selectedCards.includes(index) || matchedCrads.includes(index)
                    return(
                        <Card 
                            key={index}
                            isTurnedOver={isTurnedOver}
                            onPress={() => handleTapCard(index)}
                        >
                            {card}
                        </Card>
                    )
                })}
            </View>
            {didPlayaerWin() && <Button onPress={resetGame} title='reiniciar' />}
        </View>
    );

}

export default Memorama;
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#0f172a",
        alignItems:"center",
        justifyContent:"center"
    },
    title:{
        fontSize:32,
        color:"white",
        fontWeight:"900"
    },
    board:{
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent:"center"
    }
})
/**
 * Devuelve las matrices shuffled en un orden aleatorio
 */
function shuffled(array){
    for(let i = array.length - 1; i > 0; i--){
        const randomIndex = Math.floor(Math.random() * (i + 1));

        // Cambiando los elementos de i y randomIndex
        [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }
    return array;
}