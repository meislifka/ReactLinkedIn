import "./App.css";
import { useState } from "react";

//hooks are used for repeatable code

function useInput(initalValue){
  const[value,setValue] = useState(initalValue);
  return (
    {value,onChange: e=>setValue(e.target.value)},
     () =>setValue(initialValue)
  );

}

function App() {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useState("#000000");
  const submit = (e) => {
    e.preventDefault();
    alert(`${titleProps.value}, ${colorProps.value}`);
    resetTitle()
    setColor("#000000");
  };
  return (
    <form onSubmit={submit}>
      <input
        {...titleProps}
        type="text"
        placeholder="color title..."
      />
      <input
        {...titleProps}
      />
      <button>ADD</button>
    </form>
  );
}

export default App;
