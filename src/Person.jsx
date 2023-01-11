import {useState} from "react"
import Nav from "./Nav.jsx"

function Person({people}) {
    const [index, setIndex] = useState(0)

    if (!people.length) return <h1>Loading...</h1>

    {/*function indexAdjustment() {
        if (index < people.length) {
            setIndex(prev => prev + 1)
        } else if (index >= people.length) {
            setIndex(0)
        }
    }

    function disableButton() {
        if (index + 1 < people.length) {
            return false
        } else {
            return true
        }
    }*/}

    let character = people[index]

    function showCharacter(index) {
        setIndex(index)
    }

    return (
        <div>
            <nav className="buttonCollection">
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
            </nav>
            <div className="character" id={index}>
                <h1 className="character">{character.name}</h1>
                <ul className="character">
                    <li className="character">Height: {character.height}</li>
                    <li className="character">Mass: {character.mass}</li>
                    <li className="character">Hair Color: {character.hair_color}</li>
                    <li className="character">Skin Color: {character.skin_color}</li>
                    <li className="character">Eye Color: {character.eye_color}</li>
                    <li className="character">Gender: {character.gender}</li>
                </ul>
            </div>
            {/* <button onClick={() => indexAdjustment()} disabled={disableButton()}>Next Person</button>
            <button onClick={() => setIndex(0)}>Reset</button>  */}
        </div>
    )

}

export default Person

