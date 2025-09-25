import React, { useState } from 'react'
import './TikTactoe.css';
import crossIcon from '../Assets/cross.png'
import circleIcon from '../Assets/circle.png'

let data = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,5],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
const TikTacToe = () => {

    const [board,setBoard] = useState(Array(9).fill(''));
    const [turn,setTurn] = useState('X');
    const [winner,setWinner] = useState(null);

    const hadleClick = (index)=>{
        if(data[index] !=='' && winner) {
            return 0;
        }
         let newBoard = [...board];
         newBoard[index] = turn;
         setBoard(newBoard);

         if(checkWin(newBoard)){
            setWinner(turn);
         }else{
            setTurn( turn ==='X'?'O':'X');
         }
    };

    const checkWin = (board)=>{
        return data.some(([a,b,c])=>{
            return board[a] && board[a] === board[b] && board[a] === board[c];
        })
    };

    const reset = ()=>{
        setBoard(Array(9).fill(''));
        setTurn('X');
        setWinner(null);
    }
  return (
    <>
      <div className="cotainer">
        <h1 className="title">{winner?`congratulations:${winner} Wins`:`Tic Tac Toe Game in <span>React</span>`}</h1>
        <div className="board">
            {board.map((cell,index)=>{
                return (
                    <div className="boxes" key={index} onClick={()=>{hadleClick(index)}}>
                        {cell === 'X' && <img src={crossIcon} alt="X" />}
                        {cell === 'O' && <img src={circleIcon} alt="X" />}
                    </div>
                )
            })}
        </div>
        <button onClick={reset} clsssName='reset'>Reset</button>
      </div>
    </>
  )
}

export default TikTacToe
