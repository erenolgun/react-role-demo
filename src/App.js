import React, { useEffect, useState } from "react";

//components
import Home from "./Home";
import Login from "./Login";

//ant design
import "antd/dist/antd.min.css";

import { PermifyProvider } from "@permify/react-role";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  return (
    <PermifyProvider>
      {user === null ? <Login /> : <Home user={user} />}
    </PermifyProvider>
  );
}

export default App;
