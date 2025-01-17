import React from "react"
import "./PersonProfile.css"

export default function PersonProfile(props) {
  return (
    <div className='person-container'>
      <div>
        <h2>Hi! My name is <strong>{props.name}</strong>!</h2>
      </div>
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
        <li key={index}> {hobby}</li>
      ))}
    </ul>
  )
}