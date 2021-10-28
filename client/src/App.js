import React, {useState, useEffect} from 'react';
//import logo from './logo.svg';
import axios from "axios";
//import 'bootstrap/dist/css/bootstrap.css';
//import AppForm from "./components/AppForm"
import './App.css';
import Nav from './Nav';
import AppForm from "./AppForm";
import {
  BrowserRouter as Router,
} from 'react-router-dom';

function App(props) {
  const [setArtwalks] = useState([
    {
      name: '',
      bilds: ''
    }
  ])

  const [artwalk, setArtwalk] = useState(
    {
      name: '',
      bilds: ''
    }
  )

  useEffect(() => {
    fetch('/artwalks').then(res => {
      if(res.ok) {
        return res.json()
      }
    }).then(jsonRes => setArtwalks(jsonRes))
  })

  function handleChange(e) {
    const {name, value} = e.target;
    setArtwalk(prevInput => {
      return(
        {
          ...prevInput,
          [name]: value
        }
      )
    })
  }

  function addArtwalk(e) {
    e.preventDefault();
    const newArtwalk = {
      name: artwalk.name,
      bilds: artwalk.bilds
    }

    axios.post('/newartwalk', newArtwalk);
  }

  return (
    <div className="App" style={{ marginTop: 20 }}>
      <h3>Create Artwalk</h3>
      <ol><form className="formPost">
      <label>ArtWalk: </label>
      <li><input id="Name" onChange={handleChange} name="name" value={artwalk.name}></input></li>
      <label>Bilds: </label>
      <li><input id="Bilds" onChange={handleChange} name="bilds" value={artwalk.bilds}></input></li>
      <li><button  className="btn btn-primary" onClick={addArtwalk}>Add artwalk</button></li>
      </form></ol>

      <h3>Liste der Artwalks</h3>

      <Router>
      <Nav />
      <AppForm path="/AppForm"></AppForm>
      </Router>
    </div>
  );
}

export default App;