import "./App.css";
import { useState } from "react";
import NavBar from "./components/NavBar";
import Greeting from "./components/Greeting";
import HelloWorld from "./components/HelloWorld";
import { Auth } from "./components/auth";
import { Crud } from "./components/crud";
import Students from "./components/Students";

function App() {
  const num = 18;
  const nam = "Vaibhav";

  return (
    <div className="App">
      <NavBar />
      <HelloWorld numberprops={num} name={nam} />
      <div className="sample-css">Hello CSS</div>

      <br></br>

      <Greeting />

      <br></br>

      {/* <div>
        <Students />
      </div> */}

      <br></br>

      <div className="auth-app">
        <Auth />
      </div>
        
      <br></br>

      <div>
        <Crud />
      </div>
    </div>
  );
}

export default App;
