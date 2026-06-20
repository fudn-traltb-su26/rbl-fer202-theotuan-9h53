import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import CategoryList from './components/CategoryList';
import RoomGrid from './components/RoomGrid';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Banner />
        <CategoryList />
        <RoomGrid />
      </main>
      <Footer />
    </>
  );
}

export default App;
