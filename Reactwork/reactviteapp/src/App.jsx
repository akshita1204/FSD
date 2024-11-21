import React from 'react'
import Student from './Student'
import photo from "./assets/profile.jpg"
import UseStudentState from './UseStudentState'
import Imagemanipulation from './imagemanipulation'
import MyUseEffect from '../MyUseEffect'
export default function App() {
  const h1 = <h1>Hello!</h1>
  const mystyle = {
    color: 'red',
    backgroundColor:'yellow'
  } 
  const studentdata=[
    {
      name:"Rahul",
      branch:"CSE",
      roll:"12",
      section:"B",
      },
      {
        name:"Akash",
        branch:"CSE",
        roll:"11",
        section:"B"
        },    
  ]

  return (

    <div>
      <h1>Hello using useSatte Hooke</h1>
      <div>
        {/* <UseStudentState/> */}
        {/* <Imagemanipulation/> */}
        <MyUseEffect/>
      </div>
    </div>
    
    // <div style={{backgroundColor:'cyan'}}>
    // {h1}
    // <div style={mystyle}>ABES Engineering College</div>
    // <div style={{display:'flex'}}>
      /*{ {
        studentdata.map(
          (ele)=>{
            return <Student data={ele}/>
          }
        )
      } }*/
      /*{ <Student data={studentdata[0]}/> }*/

     /* { <Student //college="ABES Engineering College"
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
      /> }*/
    // </div>
    // {/* <div><Student></Student></div> }*/
    // </div>
  )
}
