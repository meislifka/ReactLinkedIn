import "./App.css";
import {useState} from "react";

function App({ library }) {
  const [emotion,setEmotion] = useState("happy"); //when app first renders, state will be h appy
  //set emotion is the function used to change the state
  return (
    <div className="App">
      <h1>Current emotion: {emotion}</h1>
      <button onClick={()=>setEmotion("sad")}>sad</button>
    </div>
  );
}

export default App;
