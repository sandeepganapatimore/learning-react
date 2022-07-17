import React, { Fragment } from 'react'
import Person from './Person'

function NameList() {
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
    const personsList = PersonsData.map((person) => <Person person={person} />)
    console.log(personsList)
    return (
        <Fragment>{personsList}</Fragment>

    )
}

export default NameList