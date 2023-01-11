import React from 'react'
import {Link} from 'react-router-dom';

export default function Home() {
  return (
    <div>
        <h2>SWAPI</h2>
        <Link to="/people">SW People</Link>
    </div>
  )
}
