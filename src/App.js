import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import Player from "./Player";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useStateValue } from "./StateProvider";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useStateValue();

  useEffect(() => {
    // got token from url 
    const hash = getTokenFromUrl();
    // stripped so no longer sits in url
    window.location.hash = "";
    let _token = hash.access_token;
   // store token in state so its in memory
    if (_token) {

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {

        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
    }
  }, []);


  return <div className="app">
    {token ? <Player spotify={spotify}/>  : <Login />}</div>;
}

export default App;
