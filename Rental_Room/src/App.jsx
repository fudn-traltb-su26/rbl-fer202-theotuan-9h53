import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import CategoryList from './components/CategoryList';
import RoomGrid from './components/RoomGrid';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Banner />
      <CategoryList />
      <RoomGrid />
      <Footer />
    </div>
  );
}

export default App;
