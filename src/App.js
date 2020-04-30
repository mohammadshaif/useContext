import React, { createContext, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Category from './components/Category/Category';

export const CategoryContext = createContext();

function App() {
  const [catagories,setCategory]=useState('lunch')
  return (
    <div className="App">
      <CategoryContext.Provider value={[catagories,setCategory]}>
      <Header></Header>
      <Home></Home>
      <Category></Category>
      </CategoryContext.Provider>
    </div>
  );
}

export default App;
