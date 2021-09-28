import {useState, useEffect} from 'react';
//import logo from './logo.svg';
import axios from "axios";

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
      <form>
        <input onChange={handleChange} name="title" value={artwalk.title}></input>
        <input onChange={handleChange} name="description" value={artwalk.description}></input>
        <input onChange={handleChange} name="date" value={artwalk.date}></input>
        <button onClick={addArtwalk}>Add artwalk</button>
      </form>

      {artwalks.map(artwalk => {
        return (
          <div>
            <h1>Artwalks</h1>
            <h1>{artwalk.title}</h1>
            <p>{artwalk.description}</p>
            <p>{artwalk.date}</p>
            <button onClick={() => deleteArtwalk(artwalk._id)}>DELETE</button>
          </div>
        ) 
      })}
    </div>
  );
}

export default App;
