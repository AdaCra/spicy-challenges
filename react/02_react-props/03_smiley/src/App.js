import React from "react";
import "./styles.css";

export default function App() {
  return <Smiley isHappy />;
}

export const Smiley = ({ isHappy }) => {
  return <h1>{isHappy ? "😊" : "😫"}</h1>;
};
