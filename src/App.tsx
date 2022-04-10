import React, { Suspense, useState } from 'react';
import './App.css';
import './i18n'
import { Route, Routes } from 'react-router-dom';
import { Main, PaymentDetails } from './components';

function App() {
  const [activeBlock, setActiveBlock] = useState('main')

  return (
    <Suspense fallback='Loading..'>
      <Routes>
        <Route path='/' element={<Main activeBlock={activeBlock} setActiveBlock={setActiveBlock} />} />
        <Route path="/payment-details" element={<PaymentDetails setActiveBlock={setActiveBlock} />} />
      </Routes>
    </Suspense>
  );
}

export default App;
