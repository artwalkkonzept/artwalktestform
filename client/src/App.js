import React, {useState, useEffect} from 'react';
//import logo from './logo.svg';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';

import './App.css';

function App() {
  const [artwalks, setArtwalks] = useState([
    {
      title: '',
      description: ''
    }
  ])

  const [artwalk, setArtwalk] = useState(
    {
      title: '',
      description: ''
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
      title: artwalk.title,
      description: artwalk.description
    }

    axios.post('/newartwalk', newArtwalk);
  }

  function deleteArtwalk(id) {
    axios.delete('/delete/' + id);
  }

  return (
    <div className="App" style={{ marginTop: 20 }}>
      <h3>Add Artwalk</h3>
      <form className="formPost">
      <label>Title of the Artwalk: </label>
      <li><input id="Title" onChange={handleChange} name="title" value={artwalk.title}></input></li>
      <label>Discription of the Artwalk: </label>
      <li><input id="Description" onChange={handleChange} name="description" value={artwalk.description}></input></li>
      <li><button  className="btn btn-primary" onClick={addArtwalk}>Add artwalk</button></li>
      </form>

      {artwalks.map(artwalk => {
        return (
          <div className="formPost">
            <h1>Artwalks</h1>
            <h1 className="h1Title">{artwalk.title}</h1>
            <p className="pDescription">{artwalk.description}</p>
            <button onClick={() => deleteArtwalk(artwalk._id)}>Delete</button>
          </div>
        ) 
      })}
    </div>
  );
}

export default App;
