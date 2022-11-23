import { useState,useEffect } from "react"
export default function SharukhBio(){
      const [ gitHubDATA, setGitHubDATA]=useState({})

      useEffect(()=>{
         fetch("https://api.github.com/users/SharukhGV" ).then(response=> response.json()).then(data=>setGitHubDATA(data))},[])
      
      
      
      
      return(
          <div>
      
              {gitHubDATA.bio}
              {gitHubDATA.email}
              <p className="heading"> <b>About Me</b></p>

<p>Hi! My name is Sharukh. My last job was at a family-owned business for three years. During my time there, I was an iPhone and Computer repair technician as well as the manager and sales person.</p>
<p> After hearing about the inspiring success of a family-friend who completed a bootcamp, my software web developer studies came into a rapid fruition.</p>
<p>I asked my brother, Glenn, who is studying python if he had coding resources, and he gave me quite a lot!</p>
<p>I would share my coding progress with family often. My sister's fiance then told me about PURSUIT. I applied, and I was so happy to get accepted.</p>
<p>I am making a lot of progress! Thank you for Checking out our website</p>


      </div>
      )
  
  };
  
  