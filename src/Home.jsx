import React from 'react'
import {Link} from 'react-router-dom';
import './Home.css'

export default function Home() {
  return (
    <div>
        <h1 className='homePageTitle'>Star Wars API Excerption</h1>
        <Link to="/people" className='peopleLink'>Bear Witness Here</Link>
        <p className="apiDisc">This project is based on the <a className="aDisc" href="https://swapi.dev/api/people"> Star Wars API (SWAPI)</a></p>
    </div>
  )
}
