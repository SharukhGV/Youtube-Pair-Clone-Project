import VideoCard from "./VideoCard"

export default function Videos({data}){


return (
   
    <div className="videos">
        
        {data.map((video,idx)=><VideoCard videoDetails={video}/>)}
    </div>
)
}