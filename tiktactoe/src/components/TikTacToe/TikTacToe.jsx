import React, { useState } from 'react'
import './TikTactoe.css';
import crossIcon from '../Assets/cross.png'
import circleIcon from '../Assets/circle.png'

let data = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
const TikTacToe = () => {

    const [board, setBoard] = useState(Array(9).fill(''));
    const [turn, setTurn] = useState('X');
    const [winner, setWinner] = useState(null);

  const checkWin = (b) => {
    return data.some(([a, bIdx, c]) => {
      return b[a] && b[a] === b[bIdx] && b[a] === b[c];
    });
  };

  const handleClick = (index) => {
    if (board[index] !== "" && winner) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    if (checkWin(newBoard)) {
      setWinner(turn); // ✅ only set winner if real combo
      return;
    }
    setTurn(turn === "X" ? "O" : "X");
  };

  const resetGame = () => {
    setBoard(Array(9).fill(""));
    setTurn("X");
    setWinner(null);
  };
    return (
        <>
            <div className="cotainer">
                <h1 className="title">{winner ? <>
                    🎉 Congratulations:
                    <img
                        src={winner === "X" ? crossIcon : circleIcon}
                        alt={winner}
                        style={{ height: "60px", marginLeft: "10px" }}
                    />
                    Wins!
                </> : <>Tic Tac Toe Game in <span>React</span></>}</h1>
                <div className="board">
                    {board.map((cell, index) => {
                        return (
                            <div className="boxes" key={index} onClick={() => { handleClick(index) }}>
                                {cell === 'X' && <img src={crossIcon} alt="X" />}
                                {cell === 'O' && <img src={circleIcon} alt="X" />}
                            </div>
                        )
                    })}
                </div>
                <button onClick={resetGame} className='reset'>Reset</button>
            </div>
        </>
    )
}

export default TikTacToe
