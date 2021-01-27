import { useState } from "react";
import "./App.css";
import Create from "./Components/Create Data/create";
import Nav from "./Components/Navbar/navbar";
import View from "./Components/View And Update/view";

function App() {
  const [willRefresh, setRefresh] = useState(false);

  const employeeCreated = () => {
    console.log("Employee Created!");
    setRefresh(true);
  };

  return (
    <div className="App">
      <Nav />
      <br></br>
      <Create empCreated={employeeCreated} />
      <br></br>
      <View willRefresh={willRefresh} setRefresh={setRefresh} />
    </div>
  );
}

export default App;
