

import { useState } from "react";

const initialState = {
  name: "",
  image: "",
  caption: "",
};

function NewProfileForm({ onAddProfile, newProfile}) {
  const [formData, setFormData] = useState(initialState);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/profiles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((newProfile) => {
        setFormData(initialState);
        onAddProfile(newProfile);
      });
  }

  return (
    <div className="card">
      <h2>New Match</h2>
      <form onSubmit={handleSubmit} className="Form">
        <label htmlFor="image">Image URL: </label>
        <input
          type="text"
          id="image"
          value={formData.image}
          onChange={handleChange}
        />
        <label htmlFor="caption">Caption: </label>
        <textarea className="Caption"
          id="caption"
          value={formData.caption}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NewProfileForm;