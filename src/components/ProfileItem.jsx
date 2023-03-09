import ProfileStarRating from "./ProfileStarRating";

function SpiceItem({ profile, onUpdateProfile, onDeleteProfile }) {
  const { id, image, name, age, caption, rating } = profile;

  function handleUpdateRating(pct) {
    const newRating = pct * 4;
    fetch(`http://localhost:3000/profiles/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ rating: newRating }),
    })
      .then((r) => r.json())
      .then(onUpdateProfile);
  }

  function handleDeleteProfile() {
    fetch(`http://localhost:3000/profiles/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        onDeleteProfile(profile);
      }
    });
  }

  return (
    <div className="match-card">
      <img src={image} alt={name} className="img" />
      <div className="details">
        <h2>{name}</h2> 
        <p>{caption}</p>
        <p>
          <button onClick={handleDeleteProfile}>Delete</button>
        </p>
      </div>
    </div>
  );
}

export default SpiceItem;