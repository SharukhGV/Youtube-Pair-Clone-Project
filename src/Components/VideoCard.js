import { useEffect } from "react"
import { Navigate, useNavigate, } from "react-router-dom"


export default function VideoCard({videoDetails}){

    const navigate=useNavigate()

   return   ( 
    <div onClick={()=>navigate(`/video/${videoDetails.id.videoId}`)} >
    
    {videoDetails ? <div className="video-card">
            <img src={videoDetails.snippet.thumbnails.medium.url} alt="pic" className="thumb"/>
            <h4>{videoDetails.snippet.title}</h4>
            <p>{videoDetails.snippet.chanelTitle}</p>
            {/* <p>{videoDetails.snippet.description.slice(0,60)}</p> */}
        </div>: null }
        
        </div>
  )

}