//components
import Home from "./Home";
import Login from "./Login";

//ant design
import "antd/dist/antd.min.css";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
    console.log(JSON.parse(localStorage.getItem("user")));
  }, []);

  return <div>{user === null ? <Login /> : <Home user={user} />}</div>;
}

export default App;
