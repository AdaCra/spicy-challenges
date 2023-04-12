import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>This</Button>
      <Button>Is</Button>
      <Button>A</Button>
      <Button>Button</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
