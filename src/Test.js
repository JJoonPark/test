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

  const [s00, setS00] = useState("");
  const [s10, setS10] = useState("");
  const [s20, setS20] = useState("");

  const [s01, setS01] = useState("");
  const [s11, setS11] = useState("");
  const [s21, setS21] = useState("");

  const [s02, setS02] = useState("");
  const [s12, setS12] = useState("");
  const [s22, setS22] = useState("");

  const handleReset = () => {
    setPlayer("X");
    setWinner("None");
    setS00("");
    setS10("");
    setS20("");
    setS01("");
    setS11("");
    setS21("");
    setS02("");
    setS12("");
    setS22("");
  };

  const handleS00 = () => {
    player === "X" ? setS00("X") : setS00("O");
    player === "X" ? setPlayer("O") : setPlayer("X");
  };
  const handleS10 = () => {
    player === "X" ? setS10("X") : setS10("O");
    player === "X" ? setPlayer("O") : setPlayer("X");
  };
  const handleS20 = () => {
    player === "X" ? setS20("X") : setS20("O");
    player === "X" ? setPlayer("O") : setPlayer("X");
  };

  const handleS01 = () => {
    player === "X" ? setS01("X") : setS01("O");
    player === "X" ? setPlayer("O") : setPlayer("X");
  };
  const handleS11 = () => {
    player === "X" ? setS11("X") : setS11("O");
    player === "X" ? setPlayer("O") : setPlayer("X");
  };
  const handleS21 = () => {
    player === "X" ? setS21("X") : setS21("O");
    player === "X" ? setPlayer("O") : setPlayer("X");
  };

  const handleS02 = () => {
    player === "X" ? setS02("X") : setS02("O");
    player === "X" ? setPlayer("O") : setPlayer("X");
  };
  const handleS12 = () => {
    player === "X" ? setS12("X") : setS12("O");
    player === "X" ? setPlayer("O") : setPlayer("X");
  };
  const handleS22 = () => {
    player === "X" ? setS22("X") : setS22("O");
    player === "X" ? setPlayer("O") : setPlayer("X");
  };

  useEffect(() => {
    console.log(s00, s01, s02);
    if (s00 === "X" && s01 === "X" && s02 === "X") {
      setWinner("X");
    }
  }, [player]);

  return (
    <>
      <div style={styles}>
        <div style={styles2}>
          <Square player={s02} func={handleS02} />
          <Square player={s12} func={handleS12} />
          <Square player={s22} func={handleS22} />
        </div>
        <div style={styles2}>
          <Square player={s01} func={handleS01} />
          <Square player={s11} func={handleS11} />
          <Square player={s21} func={handleS21} />
        </div>
        <div style={styles2}>
          <Square player={s00} func={handleS00} />
          <Square player={s10} func={handleS10} />
          <Square player={s20} func={handleS20} />
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
