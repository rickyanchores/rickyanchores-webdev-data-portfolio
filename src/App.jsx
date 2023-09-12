import { useState } from 'react'
import Home from './Sections/Home/Home'
import Nav from './Components/Nav/Nav'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import DataTech from './Sections/DataTech/DataTech'
import WebDev from './Sections/WebDev/WebDev'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route />
        </Routes>
        <Home />
        <DataTech />
        <WebDev />
      </div>
    </Router>

  )
}

export default App
