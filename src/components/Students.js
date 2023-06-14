import React from 'react'
import {useState} from "react"

const Students = () => {
    const[name, setName] = useState("");
    const[students, setStudents] = useState(["rajesh", "raman", "yaman"]);

    const handleSubmit = (event) => {
        event.preventDefault();
        setStudents((currentStudents) => [...currentStudents, name]);
        setStudents("");
    };

  return (
    <div>
    <form onSubmit={handleSubmit}>
        <div>Add New Student</div>
        <input type="text" onChange={setName}/>
        <input type="submit"/>
    </form>

    <div>
        <h2>Students</h2>
        <ul>
            {students.map((students, index) => (
                <li key={index}>{students}</li>
            ))}
        </ul>
    </div>
    </div>
  )
}

export default Students;