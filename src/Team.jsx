import { useState } from "react";

export default function Team() {
  const [team, setTeam] = useState(11);
  const TeamStyle = {
    border: "2px solid green",
    margin: "15px",
    padding: "15px",
    borderRadius: "15px",
  };
  const btnStyle = {
    backgroundColor: "orange",
    marginLeft: "15px",
    color: "white",
  };

  const handelAdd = () => {
    const newMem = team + 1;
    setTeam(newMem);
  };
  const handleRemove = () => {
    const newMem = team - 1;
    setTeam(newMem);
  };

  return (
    <div style={TeamStyle}>
      <h3>Players: {team} </h3>
      <button onClick={handelAdd} style={btnStyle}>
        Added
      </button>
      <button onClick={handleRemove} style={btnStyle}>
        Remove
      </button>
    </div>
  );
}
