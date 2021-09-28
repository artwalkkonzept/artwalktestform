import {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";

function App() {
  const [artwaks, setArtwaks] = useState([
    {
      title: '',
      genre: '',
      year: ''
    }
  ])

  const [artwak, setArtwak] = useState(
    {
      title: '',
      genre: '',
      year: ''
    }
  )

  useEffect(() => {
    fetch('/artwaks').then(res => {
      if(res.ok) {
        return res.json()
      }
    }).then(jsonRes => setArtwaks(jsonRes))
  })

  function handleChange(e) {
    const {name, value} = e.target;
    setArtwak(prevInput => {
      return(
        {
          ...prevInput,
          [name]: value
        }
      )
    })
  }

  function addArtwak(e) {
    e.preventDefault();
    alert("artwak added");
    const newArtwak = {
      title: artwak.title,
      genre: artwak.genre,
      year: artwak.year
    }

    axios.post('/newartwak', newArtwak);
  }

  function deleteArtwak(id) {
    axios.delete('/delete/' + id);
    alert("artwak deleted");
  }

  return (
    <div className="App">
      <h1>Add Artwak</h1>
      <form>
        <input onChange={handleChange} name="title" value={artwak.title}></input>
        <input onChange={handleChange} name="genre" value={artwak.genre}></input>
        <input onChange={handleChange} name="year" value={artwak.year}></input>
        <button onClick={addArtwak}>Add Artwak</button>
      </form>

      {artwaks.map(artwak => {
        return (
          <div key={artwak._id}>
            <h1>{artwak.title}</h1>
            <p>{artwak.genre}</p>
            <p>{artwak.year}</p>
            <button onClick={() => deleteArtwak(artwak._id)}>Delete</button>
          </div>
        ) 
      })}
    </div>
  );
}

export default App;
