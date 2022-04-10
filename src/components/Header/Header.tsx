import { Box, MenuList, MenuItem, Select, SelectChangeEvent, useScrollTrigger, Slide } from '@mui/material'
import React, { useState, ReactNode, ReactElement } from 'react'

import MenuIcon from '@mui/icons-material/Menu';
import i18next from 'i18next';
import { pxToRem } from '../../styles/utils';
const LanguageSelector = () => {
  const [language, setLanguage] = useState(i18next.language)
  const handleChangeLanguage = (event: SelectChangeEvent<string>) => {
    i18next.changeLanguage(event.target.value);
    localStorage.setItem('language', event.target.value)
    setLanguage(event.target.value)
  };
  return (
    <Select variant='standard' sx={{ height: '30px', width: '50px', fontWeight: '700' }} disableUnderline IconComponent='a' value={language} onChange={handleChangeLanguage}>
      <MenuItem value='en' children='EN' />
      <MenuItem value='uk' children='UK' />
    </Select>
  );
};

interface INavBarProps {
  handleOpenMenu: React.Dispatch<React.SetStateAction<boolean>>
}
const HideOnScroll = ({ children }: { children: ReactElement }) => {
  const trigger = useScrollTrigger()
  return (
    <Slide appear={false} direction={'down'} in={!trigger}>
      {children}
    </Slide>
  )
}
const Header = ({ handleOpenMenu }: INavBarProps) => {
  return (
    <HideOnScroll>
      <Box
        display='flex'
        alignItems='center'
        justifyContent='space-between'
        sx={{
          boxSizing: 'border-box',
          position: 'fixed',
          zIndex: 4,
          top: '0',
          height: pxToRem(80),
          backgroundColor:'white',
          width: '100%',
          boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
          marginBottom: pxToRem(20),
          paddingX: pxToRem(20)
        }}>
        <Box children='logo' />
        <Box display='flex' alignItems='center'>
          <Box>
            <LanguageSelector />
          </Box>
          <Box onClick={() => handleOpenMenu(true)}>
            <MenuIcon sx={{
              height: '30px',
              width: '30px',
              '&:hover':{
                cursor:'pointer'
              }
            }} />
          </Box>
        </Box>
      </Box>
    </HideOnScroll>
  )
}

export default Header