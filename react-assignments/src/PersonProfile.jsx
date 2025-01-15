import React from "react"

export default function PersonProfile(props) {
    return (
      <div>
        <p>Hi!My name is <strong>{props.name}</strong>!</p>
        <p>I am {props.info.age} years old.</p>
        <p>Actually, I live in {props.info.city} and I work as a {props.info.job}.</p>
        <p>What makes me happy to do on my free time is: </p>
        <HobbiesList hobbies={props.info.hobbies} />
      </div>
    )
  }
  function HobbiesList(props) {
    return (
      <ul>
        {props.hobbies.map((hobby, index) => (
          <li key={index}>- {hobby}</li>
        ))}
      </ul>
    )
  }