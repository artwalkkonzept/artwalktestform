import React, { useState, useEffect } from "react";
//import ReactDOM from "react-dom";

function Appform() {
  const [artwalks, setArtwalks] = useState([]);

  useEffect(() => {
    fetch("./artwalks")
      .then(response => response.json())
      .then(data => {
        setArtwalks(data);
      });
  }, []);

  return (
    <div>
      {artwalks.map(artwalk => (
        <div key={artwalk.id}>
          <span>{artwalk.name}</span>
        </div>
      ))}
    </div>
  );
}
export default Appform