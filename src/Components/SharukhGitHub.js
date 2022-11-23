import { useState, useEffect } from "react";
export default function SharukhGitHub(){
const [ gitHubDATA, setGitHubDATA]=useState({})

useEffect(()=>{
   fetch("https://api.github.com/users/SharukhGV" ).then(response=> response.json()).then(data=>setGitHubDATA(data))},[])




return(
    <div>

        {gitHubDATA.bio}
        {gitHubDATA.email}
</div>
)

}