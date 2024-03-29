import React, { useState } from "react";
import Counter from "./components/Counter";
import "./styles.css";

export default function App() {
  
  const [people, setPeople] = useState(0);
  const People = (value) => {
    setPeople(people + value);
  };

  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter People={People} />
      <p>You are going to reserve a table for {people} people.</p>
    </div>
  );
}
