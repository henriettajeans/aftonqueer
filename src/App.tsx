import React from 'react';
import './App.scss';
import { AllText } from './components/allArticles';
import Header from './components/header';

function App() {
  return (
    <div className="App">

      <Header established={'2023'} title={'AftonQueer'} dir={'Henrietta Jeansson'}/>
      <AllText/>
    </div>
  );
}

export default App;
