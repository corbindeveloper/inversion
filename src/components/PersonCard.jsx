import React, { useState } from 'react';

const PersonCard = props => {
    let {firstName, lastName, age, hairColor} = props;
    let[newAge, setAge ] = useState(age)

    const birthday = ()=>{
        setAge(newAge+1)
    }

    return (
        <div className="person">
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {newAge}</p>
            <p>Hair Color: {hairColor}</p>
            <button className="button" onClick={birthday}>Birthday Button for {firstName} {lastName}</button>
        </div>
    )
}

export default PersonCard;