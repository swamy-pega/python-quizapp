

import React from "react";
import Home from "./pages/Home.jsx"

import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from './component/Navbar.jsx'

import Quiz from "./component/QuizSample2.tsx";
import Banner from "./component/Banner.jsx";

function App() {

  
 return(

  <div>
  

      
      <BrowserRouter>

 <Banner />
<Navbar />
   

    <Routes >
        <Route path="/" element={<Home />}/>
         {/*<Route path="/services" element={<Services />}/>
        <Route path="/MovieResults" element={<MovieResults />
        <Route path="/UserList" element={<UserList />}/> */}
        <Route path="/quiz-app" element={<Quiz />}/>
       
    </Routes>
    
    </BrowserRouter>
    </div> 


);

}


export default App;
