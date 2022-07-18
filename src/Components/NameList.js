import React, { Fragment } from 'react'
import Person from './Person'

function NameList() {
    const namesdata=["Kayan","Dayan","Mayan","Kayan"]
    const PersonsData = [
        {
            id: "Sandeep",
            prof: "React js Developer",
            age: "22"
        },
        {
            id: "Sanket",
            prof: "Vue js Developer",
            age: "19"
        },
        {
            id: "Dharin",
            prof: "Angular js Developer",
            age: "21"
        }
    ]
    // Donot use key prop to render any data.
    // const personsList = PersonsData.map((person) => <Person key={person.id} person={person} />)
    const personsList = namesdata.map((names,index)=><h1 key={index}>{index} {names}</h1>)
    console.log(personsList)
    return (
        <Fragment>{personsList}</Fragment>

    )
}

export default NameList