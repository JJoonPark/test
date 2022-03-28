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

export default function Square({ func, player, num, plate, isFinished }) {
  return (
    <div style={styles} onClick={() => func(player, num, isFinished)}>
      {plate}
    </div>
  );
}
