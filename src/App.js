
import React from 'react'
import "bootstrap/dist/css/bootstrap.css"
import './App.css';
import StarWarsApp from "./components/StarWarsApp"
import {useState } from 'react'



const  App = () => {
    const [url, setUrl] = useState('http://swapi.dev/api/planets/')
    const[nextUrl, setNextUrl] = useState('')

  const handleButtonMore = () => {
    setUrl(nextUrl)
  }


    return (
      <div className="App">
        <h1 className='display-1 text-center'>Les planetes starwars</h1>
        <div className="container">
          <StarWarsApp setNextUrl={setNextUrl} url={url}/>
          <button disabled={nextUrl === null} onClick={handleButtonMore} className="btn btn-info my-5 me-2">{nextUrl !== null? "Voir plus" : "Fin de la liste"}</button>
         
        </div>
      </div>
    );
  
}

export default App;
