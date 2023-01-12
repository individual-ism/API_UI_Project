import {useState} from "react"
import "./Person.css"

function Person({people}) {
    const [index, setIndex] = useState(0)

    if (!people.length) return <h1>Loading...</h1>

    let character = people[index]

    function showCharacter(index) {
        setIndex(index)
    }

    return (
        <div>
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
                <ul className="character characterBody">
                    <li className="character characterBodyItem">Height: {character.height}</li>
                    <li className="character characterBodyItem">Mass: {character.mass}</li>
                    <li className="character characterBodyItem">Hair Color: {character.hair_color}</li>
                    <li className="character characterBodyItem">Skin Color: {character.skin_color}</li>
                    <li className="character characterBodyItem">Eye Color: {character.eye_color}</li>
                    <li className="character characterBodyItem">Gender: {character.gender}</li>
                </ul>
            </div>
        </div>
    )

}

export default Person

