

import { useState } from "react";
import "../Styles/Index.css"

const initialState = {
  name: "",
  image: "",
  age: "",
  caption: "",
  rating: "",
};

function NewMatchForm({ onAddMatch, newMatch}) {
  const [formData, setFormData] = useState(initialState);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/matches", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((newMatch) => {
        setFormData(initialState);
        onAddMatch(newMatch);
      });
  }

  return (
    <div className="card">
      <h2>New Match</h2>
      <form onSubmit={handleSubmit} className="Form">
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          value={formData.title}
          onChange={handleChange}
        />
        <label htmlFor="image">Image URL: </label>
        <input
          type="text"
          id="image"
          value={formData.image}
          onChange={handleChange}
        />
        <label htmlFor="age">Age: </label>
        <input className="Age"
          type="text"
          id="age"
          value={formData.age}
          onChange={handleChange}
        />
        <label htmlFor="caption">Caption: </label>
        <textarea className="Caption"
          id="caption"
          value={formData.caption}
          onChange={handleChange}
        />
        <label htmlFor="rating">Rating: </label>
        <input className="RatingInput"
          type="number"
          id="rating"
          max="5"
          value={formData.rating}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NewMatchForm;