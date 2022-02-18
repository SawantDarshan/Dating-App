import { useState } from "react";
import "./App.css";
import Login from "./modules/pop_ups/signUp/SignUp";

function App() {
  let [user, setUser] = useState(false);
  let toggle = () => setUser(!user);

  return (
    <div className="App">
      {user && <Login />}
      <button onClick={toggle}>login</button>
    </div>
  );
}

export default App;
