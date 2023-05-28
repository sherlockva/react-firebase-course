import React from "react";

function Greeting() {

    function sayHi(name, surname) {
        alert('Hi ' + name + ' ' + surname);
    }
    return  (
        <div>
            <button onClick={() => sayHi('Ayush', 'Gupta')}>Say HI</button>
        </div>
    )
}

export default Greeting