
import React, { Suspense, useCallback, useState } from 'react';
import './i18n'
import { Route, Routes } from 'react-router-dom'
import { MainPage, PaymentDetails } from './components'
import { muiTheme } from './styles/muiTheme'
import { ThemeProvider } from '@mui/material';

function App() {
  const [activeBlock, setActiveBlock] = useState('main')
  return (
    <Suspense fallback="Loading..">
      <ThemeProvider theme={muiTheme}>
        <Routes>
          <Route path='/' element={<MainPage activeBlock={activeBlock} setActiveBlock={setActiveBlock} />} />
          <Route path="/payment-details" element={<PaymentDetails activeBlock={activeBlock} setActiveBlock={setActiveBlock} />} />
        </Routes>
      </ThemeProvider>
    </Suspense>
  )
}

export default App;