import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.scss';
// import { AllText } from './components/allArticles';
// import Header from './components/header';

function App() {
  return (
    <div className="App">
      
      
      <Outlet></Outlet>
    </div>
  );
}

export default App;
