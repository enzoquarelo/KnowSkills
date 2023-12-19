import Rotas from "./routes/routes";
import { UserContext } from "./context/AuthContext";
import "./App.css";
import { useEffect, useState } from "react";

const App = () => {
  const [userData, setUserData] = useState({});

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <Rotas />
    </UserContext.Provider>
  );
};

export default App;
