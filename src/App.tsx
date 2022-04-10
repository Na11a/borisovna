
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
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const openMenu = useCallback(() => {
    setIsOpenMenu(true)
  }, [])
  const closeMenu = useCallback(() => {
    setIsOpenMenu(false)
  }, [])

  return (
    <Suspense fallback="Loading..">
      <ThemeProvider theme={muiTheme}>
        <Routes>
          <Route path='/' element={<MainPage isMenuOpen={isOpenMenu} activeBlock={activeBlock} setActiveBlock={setActiveBlock} openMenu={openMenu} closeMenu={closeMenu} />} />
          <Route path="/payment-details" element={<PaymentDetails isMenuOpen={isOpenMenu} activeBlock={activeBlock} setActiveBlock={setActiveBlock} openMenu={openMenu} closeMenu={closeMenu} />} />
        </Routes>
      </ThemeProvider>
    </Suspense>
  )
}

export default App
