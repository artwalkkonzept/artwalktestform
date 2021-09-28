import {useState, useEffect} from 'react';
//import logo from './logo.svg';
import './App.css';
import axios from "axios";

function App() {
  const [artwalks, setArtwalks] = useState([
    {
      title: '',
      genre: '',
      year: ''
    }
  ])

  const [artwalk, setArtwalk] = useState(
    {
      title: '',
      genre: '',
      year: ''
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
      genre: artwalk.genre,
      year: artwalk.year
    }

    axios.post('/newartwalk', newArtwalk);
  }

  function deleteArtwalk(id) {
    axios.delete('/delete/' + id);
    alert("artwalk deleted");
  }

  return (
    <div className="App">
      <h1>Add Artwalk</h1>
      <form>
        <input onChange={handleChange} name="title" value={artwalk.title}></input>
        <input onChange={handleChange} name="genre" value={artwalk.genre}></input>
        <input onChange={handleChange} name="year" value={artwalk.year}></input>
        <button onClick={addArtwalk}>Add artwalk</button>
      </form>

      {artwalks.map(artwalk => {
        return (
          <div>
            <h1>{artwalk.title}</h1>
            <p>{artwalk.genre}</p>
            <p>{artwalk.year}</p>
            <button onClick={() => deleteArtwalk(artwalk._id)}>DELETE</button>
          </div>
        ) 
      })}
    </div>
  );
}

export default App;
