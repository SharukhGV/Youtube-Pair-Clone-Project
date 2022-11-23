import './App.css';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"

// import Nav from './Components/Nav';
import About from './Components/About';
import Home from './Components/Home';
import Video from './Components/Video';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
// import Origin from './Components/Origin';

//basics on what to require to enable site proper functionality. make sure you did npm init, nppm i express,  and npm install passport-local

// var express = require('express')
// const app = express()
// const port = 7777
// const path = require('path');

// const mongoose = require('mongoose')
// //mongoose.connect('mongodb://localhost:7777/app');
// const db = mongoose.connection

// const indexRouter = require("./routes/index");
// const { Db } = require('mongodb');
// app.use('/', indexRouter);




// //const expressLayouts = require('express-ejs-layouts');

// //The code below allows application to take form and apply it to request and post variables
// app.use(express.urlencoded({extended: false}))

// //code below will render login page



// //code above will rendewr login page




// //Code below is to make images from public folder show up on website
// app.use(express.static('public'))

// //Code Below is to connect to Hosting platform
// //app.listen(process.env.PORT || port)

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })




// //Below code is to allow directory to be viewed from views folder without directly mentioning it, in addition to making the files ejs to be read without mentioning the file type

// // app.set('view engine','ejs')
// // app.set('views', path.join(__dirname,'/views'));


// //Configuring PAssport for username and password Authentication

//   //Below code is for Authenticating requests



// //code below are URL tails(ends) to correct directory

// app.get('/login',(req,res) =>{
//   res.render(<Login/>)
// })



// app.get('/signup',(req,res) =>{
//   res.render(<SignUp/>)
// })



//any other page will go to this site as an error message. Make sure to make this a proper html page!!!!

// app.get ('*', (req,res) => {
//   res.send("Sorry! Error 404. It looks like you found a page that does not exist.")
// })


function App() {
 
  return (
    
  <Router className="display">    
    <Routes>

    {/* <Route path="/" element={<Origin />}/> */}
      <Route path="/home" element={<Home />} />
      <Route path="/about/" element={<About />}/>
     <Route path="/home/video/:id" element={<Video  />} />
    <Route path="/" element={<Login />} />
    <Route path="/signup" element={<SignUp />}/>
    </Routes>
  </Router>
  );
}

export default App;


