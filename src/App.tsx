import React from 'react'
import './App.css'
import { BrowserRouter } from "react-router-dom"
import Navigation from './Navigation'

// router:
// truth
// calculator
// comparer
// other resources for money
// number generator

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  );
}

export default App;
