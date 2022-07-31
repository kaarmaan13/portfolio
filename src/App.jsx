import "./App.css"
import { Route, Link } from "wouter"

import Worklist from "./components/worklist/Worklist"
// import Cvpdf from "./components/cvpdf/Cvpdf"

// App.js
function Home() {
  return (
    <>
      <main>
        <nav>
          <h2>CV 2022</h2>
          <p>Descarga tu mi currículum aquí.</p>
          {/* <Cvpdf /> */}
        </nav>
      </main>
    </>
  )
}
export default function App() {
  let activeClassName = "isactive"
  return (
    <div className="App">
      <h1>Manuel Del Castillo</h1>
      <h2>Diseñador/Programador Web</h2>
      <nav>
        <Link
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
          to="/"
        >
          Home
        </Link>
        <Link
          to="/trabajos"
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          Trabajos
        </Link>
      </nav>
        <Route path="/" element={<Home />} />
        <Route path="trabajos" element={<Worklist />} />
    </div>
  )
}