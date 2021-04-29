import React, { useState, useEffect } from 'react'
import axios from 'axios'


const StarWarsApp = ({ url, setNextUrl }) => {
  const [planetsList, setPlanetsList] = useState([])
  const [isloading, setIsLoading] = useState(false)


useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      let data = await axios(url)
      setIsLoading(false)
      
  //agrandir la liste
  for (let elem of data.data.results) {
    planetsList.push(elem)
  }

      setPlanetsList(() => planetsList)
      setNextUrl(() => data.data.next)
    }
    fetchData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [url])


  return ( <div>
    
        <div className="d-flex flex-wrap">
          
          {planetsList.map((elem) => {
            return <div key={elem.name} className="card mb-3 me-3" style={{width:'200px', backgroundColor:'yellow'}}>
              <div className="card-body">
                <h2 className="card-title">{elem.name}</h2>
                <h3 className="card-subtitle">Diamètre : {elem.diameter}</h3>
              </div>
            </div>
          })}
          </div>
          {isloading ? <h2>Chargement...</h2> : '' }
          </div>
        
  )
}
export default StarWarsApp
