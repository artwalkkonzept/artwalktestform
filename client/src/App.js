import {useState, useEffect} from 'react';
//import logo from './logo.svg';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';

import './App.css';


import DateTimePicker from 'react-datetime-picker';

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

  const [value, onChange] = useState(new Date())
  
    
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
    <div className="App">
      <h3>Add Artwalk</h3>
      <form className="formPost">
        <p>Title</p><input id="Title" onChange={handleChange} name="title" value={artwalk.title}></input>
        <p>Description</p><input id="Description" onChange={handleChange} name="description" value={artwalk.description}></input>
        <button onClick={addArtwalk}>Add artwalk</button>
      </form>

      {artwalks.map(artwalk => {
        return (
          <div className="formPost">
            <h1>Artwalks</h1>
            <h1 className="h1Title">{artwalk.title}</h1>
            <p className="pDescription">{artwalk.description}</p>
            
      <div>
        <DateTimePicker
          onChange={onChange}
          value={value}
        />
      </div>

            <button class="btn btn-primary" onClick={() => deleteArtwalk(artwalk._id)}>Delete</button>
          </div>
        ) 
      })}
    </div>
  );
}

export default App;
