import { useState, useEffect } from "react";
import NewProfileForm from "./NewProfileForm";
import ProfileItem from "./ProfileItem";

function App({profile}) {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/profiles")
      .then((r) => r.json())
      .then(setProfiles);
  }, []);

  function handleAddProfile(addedProfile) {
    setProfiles((profiles) => [...profiles, addedProfile]);
  }

  function handleUpdateProfile(updatedProfile) {
    setProfiles((profiles) =>
      profiles.map((profile) => {
        return profile.id === updatedProfile.id ? updatedProfile : profile;
      })
    );
  }

  function handleDeleteProfile(deletedProfile) {
    setProfiles((profiles) =>
      profiles.filter((profile) => profile.id !== deletedProfile.id)
    );
  }

  return (
    <>
      <main>
        <NewProfileForm onAddProfile={handleAddProfile} />
        <section className="spice-list">
          {profiles.map((profile) => (
            <ProfileItem
              key={profile.id}
              profile={profile}
              onUpdateSpice={handleUpdateProfile}
              onDeleteSpice={handleDeleteProfile}
            />
          ))}
        </section>
      </main>
    </>
  );
}
export default App;