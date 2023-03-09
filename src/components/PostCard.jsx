import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [matches, setMatches] = useState([]);
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetch("/match")
      .then((r) => r.json())
      .then(setMatches);
  }, []);

  useEffect(() => {
    fetch("/profile")
      .then((r) => r.json())
      .then(setProfiles);
  }, []);

  function handleDeleteMatch(id) {
    fetch(`/matches/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setMatches((matches) =>
          matches.filter((match) => match.id !== id)
        );
      }
    });
  }

  function handleDeleteProfile(id) {
    fetch(`/profile/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setProfiles((profile) =>
          profiles.filter((profile) => profiles.id !== id)
        );
      }
    });
  }

  return (
    <div>
      <h2>Matches</h2>
      <ul>
        {matches.map((match) => (
          <li key={match.id}>
            <span>
              {match.name} | Age: {match.age} | Caption: {match.caption} | Image: {match.image}
            </span>
            <button onClick={() => handleDeleteMatch(match.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}

export default Home;
