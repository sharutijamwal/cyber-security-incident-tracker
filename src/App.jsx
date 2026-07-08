import { useState } from "react";
import Login from "./components/Login";
import DataEntry from "./components/DataEntry";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      {loggedIn ? (
        <DataEntry />
      ) : (
        <Login onLogin={() => setLoggedIn(true)} />
      )}
    </>
  );
}

export default App;
 
