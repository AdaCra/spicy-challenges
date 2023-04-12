import React from "react";
import "./styles.css";

export default function App() {
  return (
    <>
      <Button color={"#ef0404"} text={"This Button is ON"} />
      <Button color={"#001dff"} disabled text={"This Button is OFF"} />
    </>
  );
}

export const Button = ({ color, disabled, text }) => {
  return (
    <button
      disabled={disabled}
      style={{ backgroundColor: color }}
      onClick={() => alert("You clicked me!?")}
    >
      {text}
    </button>
  );
};
