import "./styles.css";
import { useState } from "react";

export default function App() {
  const [isActive, setIsActive] = useState(false);
  const [buttonText, setButtonText] = useState("Activate");
  function handleClick() {
    setIsActive(!isActive);
    isActive ? setButtonText("Deactivate") : setButtonText("Activate");
    // Check that the value changes correctly.
    console.log("isActive", isActive);
  }

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>{buttonText}</button>
    </main>
  );
}
