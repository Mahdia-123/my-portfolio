import React from "react";

export default function NewDate(props) {
  return (
    <div style={{ fontSize: "30px", color: " #ebf6f6", textAlign: "center" }}>
      {props.date.getFullYear()}
    </div>
  );
}
