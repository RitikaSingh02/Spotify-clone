//https://developer.spotify.com/
//https://developer.spotify.com/documentation/web-api/reference/tracks/

export const auth_endpoint="https://accounts.spotify.com/authorize";

const redirect="http://localhost:3000";
const client_id="b3c9a0527da74dcca6d7ffaf2662f15d";

const scopes = [
//   "user-read-currently-playing",
//   "user-read-recently-played",
//   "user-read-playback-state",
//   "user-top-read",
  "user-modify-playback-state",
];
export const login_url=`${auth_endpoint}?client_id=${client_id}&redirect_uri=${redirect}&scope=${scopes.join("%20%")}&response_type=token&show_dialog=true`;

export const get_token_from_response=()=>{
    return window.location.hash.substring(1).split('&').reduce((initial,item)=>{
        let all_sections=item.split("=");
        initial[all_sections[0]]=decodeURIComponent(all_sections[1]);
        return initial;
    },{});//reduce((accumulator,current_val)=>{//code},{initial val of the acccumulator})
    //reduce is a callback func
}
