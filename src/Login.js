import	React from 'react'	
import "./login.css"
import {login_url} from "./Spotify.js"

function Login(){	
    return (
    <div className="login">
        {/* <h1>LOGIN PAGE</h1> */}
        <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png" alt="logo"/>

        <a href={login_url}>LOGIN WITH SPOTIFY</a>
    </div>
         )	
}
export default Login;