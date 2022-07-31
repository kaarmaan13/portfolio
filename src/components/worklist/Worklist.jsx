import axios from "axios"
import "./Worklist.css"
import { useEffect, useState } from "react"


export default function Worklist() {
  const urlbase = "http://localhost:1337"
  const [error, setError] = useState(null)
  const [trabajos, setTrabajos] = useState([])

  useEffect(() => {
    axios
      .get(`${urlbase}/trabajos`)
      .then(({ data }) => setTrabajos(data))
      .catch((error) => setError(error))
  }, [])

  if (error) {
    // Print errors if any
    return <div>Ha ocurrido un error: <i>{error.message}</i></div>
  }

  return (
    <div className="Worklist">
      {trabajos.map(({ id, titulotrabajo, fototrabajo, linktrabajo }) => (
        <div key={id} className="work">
          <a href={linktrabajo} target="_blank">
            <img src={urlbase + fototrabajo[0].url} alt={titulotrabajo} />
            <h3>{titulotrabajo}</h3>
          </a>
        </div>
      ))}
    </div>
  )
}