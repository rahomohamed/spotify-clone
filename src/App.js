import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    // got token from url 
    const hash = getTokenFromUrl();
    // stripped so no longer sits in url
    window.location.hash = "";
    let _token = hash.access_token;
   // store token in state so its in memory
    if (_token) {
      setToken(_token);
    }
  }, []);

  return <div className="app">{token ? <h1>Logged In</h1> : <Login />}</div>;
}

export default App;
