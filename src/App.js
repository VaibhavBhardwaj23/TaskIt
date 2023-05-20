import { useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import DisplayTask from "./components/DisplayTask";
import Header from "./components/Header";
function App() {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="App">
      <Header />
      <AddTask toggle={toggle} setToggle={setToggle} />
      <DisplayTask toggle={toggle} setToggle={setToggle} />
    </div>
  );
}

export default App;
