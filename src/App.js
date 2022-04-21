import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";

import CurrentPhoto from "./Components/Photo";

function App() {
  const [photo, setPhoto] = useState();

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(response => {
        setPhoto(response.data);
      })
      .catch(error => console.error(error))
  }, [])

  return (
    <div className="App">
      { photo && <CurrentPhoto photo={photo} /> }
    </div>
  );
}

export default App;
