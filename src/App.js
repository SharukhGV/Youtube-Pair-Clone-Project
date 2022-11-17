import './App.css';
import { useEffect,useState } from 'react';
function App() {
  // const[data, setData] = useState([])
useEffect(()=>{
  fetch(
    `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}`
  ).then(response=> response.json()).then(data=> setData(data))
},[])
  
console.log(data)
  return (
    <div className="App">
  {/* {data.forEach(element=>{element.map((dat)=>{
    
    return(
      <p key={dat}>{dat}</p>
    )
    
    })})} */}
    </div>
  );
}

export default App;
