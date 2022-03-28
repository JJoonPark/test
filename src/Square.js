import React from "react";

const styles = {
  width: "100px",
  height: "80px",
  background: "white",
  margin: "20px",
  broder: "2px solid yellow",
  fontSize: "3rem",
  color: "green",
};

export default function Square({ player, func }) {
  return (
    <div style={styles} onClick={() => func()}>
      {player}
    </div>
  );
}
