import StarRating from "./StarRating";

function SpiceItem({ match, onUpdateMatch, onDeleteMatch }) {
  const { id, image, name, age, caption, rating } = match;

  function handleUpdateRating(pct) {
    const newRating = pct * 4;
    fetch(`http://localhost:3000/matches/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ rating: newRating }),
    })
      .then((r) => r.json())
      .then(onUpdateMatch);
  }

  function handleDeleteMatch() {
    fetch(`http://localhost:3000/matches/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        onDeleteMatch(match);
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
          Age: <em>{age}</em>
        </p>
        <div>
          Rating:{" "}
          <StarRating percentage={rating / 5} onClick={handleUpdateRating} />
        </div>
        <p>
          <button onClick={handleDeleteMatch}>Delete Match</button>
        </p>
      </div>
    </div>
  );
}

export default SpiceItem;