import React, { useState, useEffect } from "react";
import Square from "./Square";

const styles = {
  width: "400px",
  height: "400px",
  background: "black",
  paddingTop: "20px",
};

const styles2 = {
  display: "flex",
};

const styles3 = {
  color: "red",
  fontSize: "2rem",
};
const styles4 = {
  width: "100px",
  height: "70px",
  color: "white",
  background: "black",
  fontSize: "2rem",
};

export default function Test() {
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState("None");
  const [isFinished, setIsFinished] = useState(false);
  const [plate, setPlate] = useState(["", "", "", "", "", "", "", "", ""]);

  const inputPlayer = (player, num) => {
    setPlate(
      plate.reduce((prev, cur, i) => {
        if (i === num) {
          prev.push(player);
          return prev;
        } else {
          prev.push(cur);
          return prev;
        }
      }, [])
    );
  };
  const handleReset = () => {
    setPlayer("X");
    setWinner("None");
    setPlate(["", "", "", "", "", "", "", "", ""]);
    setIsFinished(false);
  };

  const toggleInputPlayer = (player, num, isFinished) => {
    if (!isFinished) {
      inputPlayer(player, num);
      player === "X" ? setPlayer("O") : setPlayer("X");
    }
  };
  useEffect(() => {
    var row_1 = true,
      row_2 = true,
      row_3 = true,
      col_1 = true,
      col_2 = true,
      col_3 = true,
      dia_1 = true,
      dia_2 = true;

    var temp = "";
    player === "X" ? (temp = "O") : (temp = "X");

    for (let i = 0; i < 3; i++) {
      plate[i] === temp ? (row_1 *= true) : (row_1 *= false);
      plate[i + 3] === temp ? (row_2 *= true) : (row_2 *= false);
      plate[i + 6] === temp ? (row_3 *= true) : (row_3 *= false);
    }
    for (let i = 0; i < 9; i = i + 3) {
      plate[i] === temp ? (col_1 *= true) : (col_1 *= false);
      plate[i + 1] === temp ? (col_2 *= true) : (col_2 *= false);
      plate[i + 2] === temp ? (col_3 *= true) : (col_3 *= false);
    }
    for (let i = 0; i < 3; i++) {
      plate[3 * i + i] === temp ? (dia_1 *= true) : (dia_1 *= false);
      plate[3 * i - i + 2] === temp ? (dia_2 *= true) : (dia_2 *= false);
    }
    if (row_1 || row_2 || row_3 || col_1 || col_2 || col_3 || dia_1 || dia_2) {
      alert(`Player ${temp} is Winner!!!`);
      setIsFinished(true);
    }
  }, [player]);

  return (
    <>
      <div style={styles}>
        <div style={styles2}>
          <Square
            func={toggleInputPlayer}
            player={player}
            num={0}
            plate={plate[0]}
            isFinished={isFinished}
          />
          <Square
            func={toggleInputPlayer}
            player={player}
            num={1}
            plate={plate[1]}
            isFinished={isFinished}
          />
          <Square
            func={toggleInputPlayer}
            player={player}
            num={2}
            plate={plate[2]}
            isFinished={isFinished}
          />
        </div>
        <div style={styles2}>
          <Square
            func={toggleInputPlayer}
            player={player}
            num={3}
            plate={plate[3]}
            isFinished={isFinished}
          />
          <Square
            func={toggleInputPlayer}
            player={player}
            num={4}
            plate={plate[4]}
            isFinished={isFinished}
          />
          <Square
            func={toggleInputPlayer}
            player={player}
            num={5}
            plate={plate[5]}
            isFinished={isFinished}
          />
        </div>
        <div style={styles2}>
          <Square
            func={toggleInputPlayer}
            player={player}
            num={6}
            plate={plate[6]}
            isFinished={isFinished}
          />
          <Square
            func={toggleInputPlayer}
            player={player}
            num={7}
            plate={plate[7]}
            isFinished={isFinished}
          />
          <Square
            func={toggleInputPlayer}
            player={player}
            num={8}
            plate={plate[8]}
            isFinished={isFinished}
          />
        </div>
      </div>
      <div style={styles3}>{`Player: ${player}`}</div>
      <div style={styles3}>{`Winner: ${winner}`}</div>
      <button style={styles4} onClick={handleReset}>
        Reset
      </button>
    </>
  );
}
