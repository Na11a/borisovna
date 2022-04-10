
import React, { Suspense, useCallback, useState } from 'react';
import './App.css';
import './App.css'
import './i18n'
import { Route, Routes } from 'react-router-dom'
import { MainPage, PaymentDetails } from './components'
import { ThemeProvider } from '@mui/material/styles'
import { muiTheme } from './styles/muiTheme'

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

export default App
