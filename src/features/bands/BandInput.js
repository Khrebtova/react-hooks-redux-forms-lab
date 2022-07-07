import React, { useState } from "react";

function BandInput({onBandSubmit}) {
  const [name, setName] = useState("");
  
  
  const handleInputChange = (e) => {
    setName(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    onBandSubmit(name);
    setName("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Add Band</button>
    </form>
    );
}

export default BandInput;
