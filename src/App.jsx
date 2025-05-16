import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import DetailsPage from './pages/DetailsPage.jsx';
import ByCategoryPage from './pages/byCategoryPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/category/:categoryId' element={<ByCategoryPage />} />
        <Route path='/details/:postId' element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
