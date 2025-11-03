import React from 'react'

function Student({props) {
  return (
    <div>
      <h2>
        Hi,I am making Student Component
      </h2>
      <ul>
        <li>Student ID:{props.id}</li>
        <li>Name:{props.name}</li>
        <li>Branch:{props.branch}</li>
        <li>Section:{props.section}</li>
        <li>College:{props.college}</li>
      </ul>
    </div>
  )
}

export default Student  
