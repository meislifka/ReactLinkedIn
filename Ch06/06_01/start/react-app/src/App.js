import "./App.css";
import { useState, useEffect } from "react";
//https://api.github.com/users/meislifka



function App() {
  const [data,setData] = useState(null);
  useEffect(()=>{
    fetch('https://api.github.com/users/meislifka').then((response)=>response.json())
    .then(setData);
  },[]);
  if(data) return <pre>{JSON.stringify(data,null,2)}</pre>
  return (
    <h1>Data</h1>  
  );
}

export default App;
