import {useState, useEffect} from 'react';
//import logo from './logo.svg';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';

import './App.css';

function App() {
  const [artwalks, setArtwalks] = useState([
    {
      title: '',
      description: '',
      date: ''
    }
  ])

  const [artwalk, setArtwalk] = useState(
    {
      title: '',
      description: '',
      date: ''
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
    alert("artwalk added");
    const newArtwalk = {
      title: artwalk.title,
      description: artwalk.description,
      date: artwalk.date
    }

    axios.post('/newartwalk', newArtwalk);
  }

  function deleteArtwalk(id) {
    axios.delete('/delete/' + id);
    alert("artwalk deleted");
  }

  return (
    <div className="App">
      <h3>Add Artwalk</h3>
      <form class="formPost">
        <p>Title</p>
        <li><input onChange={handleChange} name="title" value={artwalk.title}></input></li>
        <p>Description</p>
        <li><input onChange={handleChange} name="description" value={artwalk.description}></input></li>
        <p>Date</p>
        <li><input onChange={handleChange} name="date" value={artwalk.date}></input></li>
        <button onClick={addArtwalk}>Add artwalk</button>
      </form>

      {artwalks.map(artwalk => {
        return (
          <div>
            <h1>Artwalks</h1>
            <h1>{artwalk.title}</h1>
            <p>{artwalk.description}</p>
            <p>{artwalk.date}</p>
            <button class="btn btn-primary" onClick={() => deleteArtwalk(artwalk._id)}>DELETE</button>
          </div>
        ) 
      })}
    </div>
  );
}

export default App;
