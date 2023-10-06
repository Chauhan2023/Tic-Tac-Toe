import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./TicTactoe.css";

function TicTacToe() {
  const [board, setboard] = useState(Array(9).fill(""));
  const [move, setmove] = useState("X");
    const reset=()=>{
        setboard(Array(9).fill(""))
    }
  const click = (num) => {
    if (board[num] !== "") {
      alert("Already filled item")
      return;
    }
    let square = [...board];
      square[num] = move;
      setboard(square);
    if (move === "X") {
      setmove("O");
    } else {
      setmove("X");
    }
    let ans=checkWin(square)
    if(ans=='X'){
        alert(`winner is ${ans}`)
    }
    else if(ans=='O'){
        alert(`winner is ${ans}`)
    }
  };

  const checkWin=(board)=>{

    const consition=[
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,1,2],
        [3,4,5],
        [2,5,8],
        [0,4,8],
        [2,4,6]

    ]
    let flag=false;
    let winner='';
    consition.forEach(element => {
        if (board[element[0]]!='' && board[element[1]]!='' &&board[element[2]]!='') {
            
            if (board[element[0]]===board[element[1]] && board[element[1]]===board[element[2]]) {
                flag=true;
                winner=board[element[0]]
            }
        }
        
    });
    return winner;
};
  return (
    <>
      <div className="container">
        <h1 className="title">
          Tic Tac Toe Games in<span> (React)</span>
        </h1>
        <div className="board">
          <div className="row1">
            <div
              className="box"
              onClick={() => {
                click(0);
              }}
            >
              {board[0]}
            </div>
            <div
              className="box"
              onClick={() => {
                click(1);
              }}
            >
              {board[1]}
            </div>
            <div
              className="box"
              onClick={() => {
                click(2);
              }}
            >
              {board[2]}
            </div>
          </div>
          <div className="row1">
            <div
              className="box"
              onClick={() => {
                click(3);
              }}
            >
              {board[3]}
            </div>
            <div
              className="box"
              onClick={() => {
                click(4);
              }}
            >
              {board[4]}
            </div>
            <div
              className="box"
              onClick={() => {
                click(5);
              }}
            >
              {board[5]}
            </div>
          </div>
          <div className="row1">
            <div
              className="box"
              onClick={() => {
                click(6);
              }}
            >
              {board[6]}
            </div>
            <div
              className="box"
              onClick={() => {
                click(7);
              }}
            >
              {board[7]}
            </div>
            <div
              className="box"
              onClick={() => {
                click(8);
              }}
            >
              {board[8]}
            </div>
          </div>
        </div>
        <button className="reset" onClick={reset}>Reset</button>
      </div>
    </>
  );
}

export default TicTacToe;
