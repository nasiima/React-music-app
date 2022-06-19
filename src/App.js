import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Route, Routes  } from 'react-router-dom'
import Navbar from './layouts/Header/NavBar'
// import Home from './intro'
import Output from './pages/Messages/index.js'
import Album from './pages/Album/index.js'
import Form from './pages/Form/index.js'
import NotFound from './pages/NotFound'
import Lyrics from './pages/Lyrics/index.js'
import Home from './pages/Home/index.js';


function App() {
  return (
 
    <>
 
    <Navbar />
    
    <Routes>
     

      <Route path='/' element={<Home />} />  
      <Route  path='Album'  element={<Album />} /> 
      <Route  path='Form'  element={<Form />} /> 
      <Route  path='Messages'  element={<Output />} />  
      <Route  path='Lyrics'  element={<Lyrics />} /> 
      <Route  path='*'  element={<NotFound />} />  
  
     
    </Routes>
    </>
  
  

   
  );
}

export default App;
