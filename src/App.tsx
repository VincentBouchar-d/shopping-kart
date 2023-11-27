import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/header';
import Footer from './Components/footer';



function App() {
  function  SiteWeb() {
    Header()
    Footer()
  }


  return (
    <div>
      <div className='header'>
        <Header></Header>
      </div>
    
      <div className='footer'>
        <Footer></Footer>
      </div>
    
    </div>
    )
}

export default App;
