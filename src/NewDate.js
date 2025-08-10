import React from "react";

export default function NewDate(props) {
  return (
    <div style={{ textAlign: "center", fontSize: "30px", color: "#ebf6f6" }}>
      {props.date.getFullYear()}
    </div>
  );
}
