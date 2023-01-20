import "./App.css";
//desturcturing, grabbing by its key

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
