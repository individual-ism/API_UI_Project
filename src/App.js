import './App.css'
import { useState, useEffect } from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from "./Home.jsx";
import Person from './Person.jsx'
import Nav from './Nav';

function App() {
    const [people, setPeople] = useState([])
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const personCatcher = (id) => {
            fetch(`https://swapi.dev/api/people/`)
                .then(res => res.json())
                .then(data => setPeople(data.results))
        }
        personCatcher()
    }, [])

  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/people" element={<Person people={people} />} />
        </Routes>
    </div>
  );
}

export default App;
