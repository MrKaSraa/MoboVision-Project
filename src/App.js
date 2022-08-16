
import './App.css';
import Header from './header/Header';
import Footer from './Footer/Footer';
import { useRoutes } from 'react-router-dom'
import routes from './routes'
import React, { useState, useEffect } from 'react';
function App() {
  const onloadd = function (params) {
    window.scrollTo(0,0)
  }
  
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  let router =useRoutes(routes)
  return (
    <>
    {loading ? (
     
    <div class="loader">
    <img src="images/Capture-removebg-preview.png" alt="" />
  </div>
    ) : ( <div onLoad={onloadd} className='div-app'>

     
  <Header/>
  {router}
  <Footer/>
   
 
  </div> )}
 

 </>
  );
}

export default App;
