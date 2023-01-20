import "./App.css";
//desturcturing, grabbing by its key

//array destructuring - assinging a name based on position in the array
const [firstCity,second] = ["Tokyo","Tahoe","Villanova"]

console.log(firstCity);
console.log(second);

function App({library}) {
  return (
    <div className="App">
      <h1>Hello from {library}</h1>
    </div>
  );
}

export default App;
