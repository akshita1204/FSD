import React from 'react'
import Student from './Student'
import photo from "./assets/profile.jpg"
export default function App() {
  const h1 = <h1>hello world</h1>
  const mystyle = {
    color: 'red',
    backgroundColor:'yellow'
  } 
  return (
    <div style={{backgroundColor:'cyan'}}>
    {h1}
    <div style={mystyle}>ABES Engineering College</div>
    <div>
      <Student college="ABES Engineering College"
      name="XYZ"
      pic={<img src={photo} ></img>}
      roll="14"
      branch="CSE"
      section="B"
      />

<Student college="ABES Engineering College"
      name="Akshita Tyagi"
      roll="014"
      branch="CSE"
      section="B"
      />
    </div>
    {/* <div><Student></Student></div> */}
    </div>
  )
}
