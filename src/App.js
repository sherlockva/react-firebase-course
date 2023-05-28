
import HelloWorld from "./components/HelloWorld";
import './App.css'
import { useState } from "react";
import NavBar from "./components/NavBar";
import Greeting from "./components/Greeting";


function App() {

  const num = 18
  const nam = "vaibhav"

  const [name, setName] = useState("")
  const handleSubmit = (event) => {
    event.preventDefault()
    setStudents(currentStudents => [...currentStudents, name]);
    setName('');
  }

  const [students, setStudents] = useState(['ayush', 'vaibhav', 'navneet', 'manasvi']);

  return (
    <div className="App">
      <NavBar />
      <HelloWorld numberprops = {num} name = {nam}/>
      <div className="sample-css">Hello CSS</div>

      <br></br>

      <Greeting />

      <br>
      </br>

      {/* <form onSubmit={handleSubmit}>
        <div>What is your name?</div>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        <input type="submit" />
      </form> */}

      <br>
      </br>

      <form onSubmit={handleSubmit}>
        <div>Add a new student</div>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="submit" />

      </form>

      <br></br>
      <h2>All Students</h2>
      <ul>
        {
          students.map((students, index) => <li key={index}>{students}</li>)
        }
      </ul>


    </div>
  );
}

export default App;
