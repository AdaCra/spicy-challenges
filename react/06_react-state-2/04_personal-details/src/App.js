import React, { useState } from "react";
import "./styles.css";
import Form from "./components/Form.js";

export default function App() {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john@doe.com");

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    setName(data.name);
    setEmail(data.email);
    event.target.reset();
    event.target.elements.name.focus();
  }
  return (
    <div className="container">
      <h1>Personal Details Form</h1>
      <Form handleSubmit={handleSubmit} />
      <h2>Your submitted details:</h2>
      <p>
        Name: <span className="output">{name}</span>
      </p>
      <p>
        Email: <span className="output">{email}</span>
      </p>
    </div>
  );
}
