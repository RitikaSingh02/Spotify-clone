// import logo from './logo.svg';
import React, { useEffect, useState } from "react";
import './App.css';
import Login from "./Login.js"; 
import Player from "./Player.js"
import { get_token_from_response } from "./Spotify";
import SpotifyWebApi from "spotify-web-api-js"

const spotify=new SpotifyWebApi();

function App() {
  const [token,setToken]=useState(null);
  
  //to run code based on a specific condition;whenever a particular param changes
  //then only the useEffect func is triggered
  useEffect(()=>{
    const hash=get_token_from_response();
    //url:http://localhost:3000/#access_token=BQBOwR4Nil7XAaoAqxRIu_qsw7TMG3VfQagQkeNvK6iv8TeYSurGnUPftzAG3PP7wiB_vxvyWoFx-TYd5D4zKbcfbh-XaIYZ8-GTaagKhZJLSGzEUo3uz41VYCOLQ_x4t3OnM_B7TBEq5U11C_jaIVNwY6s3vLoGfuA&token_type=Bearer&expires_in=3600
    window.location.hash="";//we did this to hide the token that comde in our url as mentioned above
    console.log(hash);
    const _token=hash.access_token;
    if(_token)
    {
      setToken(_token);
      // console.log(_token);
      spotify.setAccessToken(_token);
      spotify.getMe().then(user=>{
        console.log("show me the user",user);
          // show me the user 
          // Object
          // display_name: "natasha"
          // external_urls: {spotify: "https://open.spotify.com/user/7ev8pdddth00w6p1pf7etb9ui"}
          // followers: {href: null, total: 0}
          // href: "https://api.spotify.com/v1/users/7ev8pdddth00w6p1pf7etb9ui"
          // id: "7ev8pdddth00w6p1pf7etb9ui"
          // images: []
          // type: "user"
          // uri: "spotify:user:7ev8pdddth00w6p1pf7etb9ui"
          // __proto__: Object
      })
    }
    console.log("this is the token rendered",hash)
  },[])
  //We put an empty [], if we want the code inside useEffect to run only once. Without empty [], 
  //the code inside the useEffect will run on every render
  return (
    <div className="App">
      {/* created the html snippet to check whether the token is rendered or not */}
    {
    token ?(
    <Player/>
      ):(
    <Login/>
    )
    }
   </div>
  );
}

export default App;
