import { useState, useEffect } from "react";
export default function ZayGitHub(){
const [ gitHubDATA, setGitHubDATA]=useState({})

useEffect(()=>{
   fetch("https://api.github.com/users/ZayLpursuit" ).then(response=> response.json()).then(data=>setGitHubDATA(data))},[])




return(
    <div>

        {gitHubDATA.bio}
        {gitHubDATA.email}

</div>
)

}