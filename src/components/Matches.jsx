import { useState, useEffect } from "react";
import NewSpiceForm from "./NewSpiceForm";
import SpiceItem from "./SpiceItem";
import Navbar2 from "./Navbar2";  


function FormApp({match}) {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/matches")
      .then((r) => r.json())
      .then(setMatches);
  }, []);

  function handleAddMatch(addedMatch) {
    setMatches((matches) => [...matches, addedMatch]);
  }

  function handleUpdateMatch(updatedMatch) {
    setMatches((matches) =>
      matches.map((match) => {
        return match.id === updatedMatch.id ? updatedMatch : match;
      })
    );
  }

  function handleDeleteMatch(deletedMatch) {
    setMatches((matches) =>
      matches.filter((match) => match.id !== deletedMatch.id)
    );
  }

  return (
    <>
      <main>
        <NewSpiceForm onAddMatch={handleAddMatch} />
        <section className="matches-list">
          {matches.map((match) => (
            <SpiceItem
              key={match.id}
              match={match}
              image={match.image} className="img"
              onUpdateMatch={handleUpdateMatch}
              onDeleteMatch={handleDeleteMatch}
            />
          ))}
        </section>
      </main>
    </>
  );
}
export default FormApp;