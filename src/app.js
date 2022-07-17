import React from "react";
import './app.css';
import { useState } from "react";
 function App() {
    let [ number , setNumber] = useState(0);
    return (
        <div className="counter">
            <h1>{number}</h1>
            <button onClick ={()=>setNumber(number+1)} class="button1">+</button>
            <button onClick ={()=>setNumber(number-1)} class="button2">-</button>
            <button onClick ={()=>setNumber(0)} class="button3">Reset</button>
        </div>
    );
}

 export default App;