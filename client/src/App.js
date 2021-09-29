import {useState, useEffect} from 'react';
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
    <div className="container" style={{ marginTop: 20 }}>
    <div className="App">
        <h3>Create New Article</h3>
      <h3>Add Artwalk</h3>
      <form className="formPost" onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Title of the article: </label><input id="Title" onChange={handleChange} name="title" value={artwalk.title} /></div>
            <div className="form-group">
            <label>Article's description: </label><input id="Description" onChange={handleChange} name="description" value={artwalk.description}/></div>
            <div className="form-group">
              <button onClick={addArtwalk}>Add artwalk</button>
          </div>
      </form>

      {artwalks.map(artwalk => {
        return (
          <div className="formPost">
            <h1>Artwalks</h1>
            <h1 className="h1Title">{artwalk.title}</h1>
            <p className="pDescription">{artwalk.description}</p>
            <button class="btn btn-primary" onClick={() => deleteArtwalk(artwalk._id)}>Delete</button>
          </div>
        ) 
      })}
    </div>
          </div>
  );
}

export default App;
