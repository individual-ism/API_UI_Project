import {useState} from "react"

function Person({people}) {
    const [index, setIndex] = useState(0)

    if (!people.length) return <h1>Loading...</h1>

    function indexAdjustment() {
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
    }

    return (
        <div>
            <h1>{people[index].name}</h1>
            <ul display="none">
                <li>{people[index].height}</li>
                <li>{people[index].mass}</li>
                <li>{people[index].hair_color}</li>
                <li>{people[index].skin_color}</li>
                <li>{people[index].eye_color}</li>
                <li>{people[index].gender}</li>
                <li>{people[index].homeworld}</li>
            </ul>
            <button onClick={() => indexAdjustment()} disabled={disableButton()}>Next Person</button>
            <button onClick={() => setIndex(0)}>Reset</button> 
        </div>
    )

}

export default Person

