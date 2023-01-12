import {useState} from "react"
import "./Person.css"
import {Link} from "react-router-dom"


function Person({people}) {
    const [index, setIndex] = useState(0)

    if (!people.length) return <h1 className="loading">Loading...</h1>

    let character = people[index]

    function showCharacter(index) {
        setIndex(index)
    }

    return (
        <div className="peoplePage">
            <div className="buttonCollection">
                <button className="characterButton" onClick={() => showCharacter(0)}>Luke Skywalker</button>
                <button className="characterButton" onClick={() => showCharacter(1)}>C-3PO</button>
                <button className="characterButton" onClick={() => showCharacter(2)}>R2-D2</button>
                <button className="characterButton" onClick={() => showCharacter(3)}>Darth Vader</button>
                <button className="characterButton" onClick={() => showCharacter(4)}>Leia Organa</button>
                <button className="characterButton" onClick={() => showCharacter(5)}>Owen Lars</button>
                <button className="characterButton" onClick={() => showCharacter(6)}>Beru Whitesun Lars</button>
                <button className="characterButton" onClick={() => showCharacter(7)}>R5-D4</button>
                <button className="characterButton" onClick={() => showCharacter(8)}>Biggs Darklighter</button>
                <button className="characterButton" onClick={() => showCharacter(9)}>Obi-Wan Kenobi</button>
            </div>
            <div className="characterTotal" id={index}>
                <h1 className="character characterHeading">{character.name}</h1>
                <div className="character characterBody">
                    <p className="character characterBodyItem"><strong className="keyVal">Height: </strong><span className="charVal">{character.height}</span></p>
                    <p className="character characterBodyItem"><strong className="keyVal">Mass: </strong><span className="charVal">{character.mass}</span></p>
                    <p className="character characterBodyItem"><strong className="keyVal">Hair Color: </strong><span className="charVal">{character.hair_color}</span></p>
                    <p className="character characterBodyItem"><strong className="keyVal">Skin Color: </strong><span className="charVal">{character.skin_color}</span></p>
                    <p className="character characterBodyItem"><strong className="keyVal">Eye Color: </strong><span className="charVal">{character.eye_color}</span></p>
                    <p className="character characterBodyItem"><strong className="keyVal">Gender: </strong><span className="charVal">{character.gender}</span></p>
                </div>
            </div>
            <Link to="/" className="goHome">Home</Link>
        </div>
    )

}

export default Person

