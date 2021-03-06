import {
  Box,
  Container, MenuItem, Select, SelectChangeEvent, Slide, useScrollTrigger,
} from '@mui/material'
import React, { ReactElement, useState } from 'react'

import MenuIcon from '@mui/icons-material/Menu'
import i18next from 'i18next'
import { pxToRem } from '../../styles/utils'

const LanguageSelector = () => {
  const [language, setLanguage] = useState(i18next.language)
  const handleChangeLanguage = (event: SelectChangeEvent<string>) => {
    i18next.changeLanguage(event.target.value)
    localStorage.setItem('language', event.target.value)
    setLanguage(event.target.value)
  }
  return (
    <Select variant="standard"
      sx={{ height: '30px', width: '50px', fontWeight: '700' }}
      disableUnderline
      IconComponent="a"
      value={language}
      onChange={handleChangeLanguage}>
      <MenuItem value="en" children="EN" />
      <MenuItem value="uk" children="UK" />
    </Select>
  )
}

interface INavBarProps {
  openMenu: () => void
}

const HideOnScroll = ({ children }: { children: ReactElement }) => {
  const trigger = useScrollTrigger()
  return (
    <Slide appear={false} direction={'down'} in={!trigger}>
      {children}
    </Slide>
  )
}
const Header = ({ openMenu }: INavBarProps) => {
  return (
    <HideOnScroll>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
        position: 'fixed',
        zIndex: 4,
        top: '0',
        right: '0',
        height: pxToRem(80),
        backgroundColor: 'white',
        width: '100vw',
        paddingX: '10%',
        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
      }}>
        <Box src="./images/logo.jpg" component={'img'} />
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box>
            <LanguageSelector />
          </Box>
          <Box>
            <MenuIcon onClick={openMenu}
              sx={{
                height: '30px',
                width: '30px',
                '&:hover': {
                  cursor: 'pointer',
                },
              }} />
          </Box>
        </Box>
      </Box>
    </HideOnScroll>
  )
}

export default Header


