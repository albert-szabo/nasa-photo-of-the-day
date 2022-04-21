import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";

function App() {
  const [photo, setPhoto] = useState();

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(response => {
        console.log(response);
      })
      .catch(error => console.error(error))
  }, [])
  
  return (
    <div className="App">

    </div>
  );
}

export default App;
