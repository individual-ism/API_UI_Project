import React from 'react'
import {Link} from 'react-router-dom';
import './Home.css'

export default function Home() {
  return (
    <div>
        <h1 className='homePageTitle'>Star Wars API Excerption</h1>
        <Link to="/people" className='peopleLink'>Bear Witness Here</Link>
    </div>
  )
}
