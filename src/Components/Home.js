import Nav from "./Nav";
import Search from "./Search";


import Sidebar from "./Sidebar";



export default function Home(){
    return (
        <div className="home-page">
            
          <Sidebar/>
            <Search />
            
          
        </div>
    )
}