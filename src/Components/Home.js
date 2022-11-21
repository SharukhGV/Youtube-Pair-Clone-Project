import Nav from "./Nav";
import Search from "./Search";
import Videos from "./Videos";

import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";



export default function Home(){
const [mostPop,setMostPop]=useState([])
useEffect(()=>{
fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=US&key=${process.env.REACT_APP_API_KEY}`
).then(res=>res.json()).then(data=>setMostPop(data.items))
},[])

    return (
        <div className="home-page">
            
          <Sidebar/>
            <Search />
            <Videos data={mostPop}/>
          
        </div>
    )
}