import { useCallback, useEffect, useState } from "react"
import { WINNING_CONTITIONS, tileBordObject } from "./constanst";

const bord ={
    display: 'grid',
    gridTemplateColumns:"auto auto auto",
    gap:"10px 10px"       
}
const tile = {
    backgroundColor:"gray",
    width:"50px",
    height:"50px",
    cursor:"pointer",
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
}

export const Bord = ({nextPlayer, setNextPlayer, hasWinner, setHasWinner}) => {
    const [tileBord, setTileBord] = useState(tileBordObject);
    useEffect(() =>{
         checkWinner()
    }, [nextPlayer])

    const resetTile = () => {
        setTileBord(tileBordObject);
        setHasWinner(false)
        setNextPlayer("X")
    }
    
    const checkWinner = useCallback ( () => {
        WINNING_CONTITIONS.map(probility => {
            const [a, b, c] = probility;
            if (tileBord[a] &&  tileBord[a] === tileBord[b] && tileBord[a] === tileBord[c]){
            setHasWinner(true);
            setTimeout(()=> {
                if(confirm("Oyun Bitti! Yeniden Başlamak İstermisiniz")) {
                setTileBord(tileBordObject);
                }
            }, 300)
        }
    })
    },[nextPlayer]);
    
    const handleClickTile = (param) => {
        if (hasWinner) return
        if (tileBord[param] === null) {
            setTileBord(prevState => {
                return{
                    ...prevState,
                    [param]: nextPlayer
                }
            })
            setNextPlayer(nextPlayer => nextPlayer === 'X' ? 'O' : 'X')
            checkWinner();
        }
    }

    return(
        <>
        <div style={bord}>
            {[...Array(9).keys()].map(element => {
              return (
                <div 
                key={element} 
                style={tile} 
                onClick={(e) => handleClickTile(element)}
                >
                    {tileBord[element]}
                </div>
              )
            })}
          </div>
            <button onClick={() => resetTile()}>Reset</button>
          </>
    )
}