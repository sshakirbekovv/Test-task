import React from 'react';
import './App.scss';
import Courses from './components/courses/Courses';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import BlocksStore from './stores/BlocksStore';
import CategoriesStore from './stores/CategoriesStore';
import MinutesStore from './stores/MinutesStore';


function App() {
  return (
    <div className="App">
      <Header categoriesResponse={CategoriesStore}/>
      <Sidebar />
      <main>
        <Courses blocksResponse={BlocksStore} minutesResponse={MinutesStore}/>
      </main>
    </div>
  )
}

export default App;
