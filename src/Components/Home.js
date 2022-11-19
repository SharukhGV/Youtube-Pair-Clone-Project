import Nav from "./Nav";
import Search from "./Search";
import Feed from "../Feed";
import VideoCard from "./VideoCard";
import Sidebar from "./Sidebar";
import Videos from "./Videos";


export default function Home(){
    return (
        <div className="home-page">
            
           {/* <Sidebar /> */}
            <Search />
            <Feed />
          
        </div>
    )
}