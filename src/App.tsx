
import React, { Suspense, useCallback, useState } from 'react';
import './i18n'
import { Route, Routes } from 'react-router-dom'
import { MainPage, PaymentDetails } from './components'
import { muiTheme } from './styles/muiTheme'
import { ThemeProvider } from '@mui/material';
import Pictures from './components/Pages/Pictures/Pictures';
import PicturesProvider from './context/PicturesContext';

function App() {
  const [activeBlock, setActiveBlock] = useState('main')
  return (
    <Suspense fallback="Loading..">
      <ThemeProvider theme={muiTheme}>
        <PicturesProvider>
          <Routes>
            <Route path='/' element={<MainPage activeBlock={activeBlock} setActiveBlock={setActiveBlock} />} />
            <Route path="/payment-details" element={<PaymentDetails activeBlock={activeBlock} setActiveBlock={setActiveBlock} />} />
            <Route path="/pictures" element={<Pictures  />} />
          </Routes>
        </PicturesProvider>
      </ThemeProvider>
    </Suspense>
  )
}

export default App;