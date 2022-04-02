import React, { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainLayout, MainPage } from './components';

const basicLanguage = 'En'

function App() {
  return (
      <MainLayout>
        <Routes>
          <Route path='/:language/' element={<MainPage />} />
        </Routes>
      </MainLayout>
  );
}

export default App;
