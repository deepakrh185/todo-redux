import React, { useState } from "react";
import "./Input.css";

function Input() {
  const [input, setInput] = useState("");
  console.log(input);
  const handleSubmit = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };
  return (
    <div className="input">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default Input;
