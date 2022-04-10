import { Box, MenuList, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import React, { useState } from 'react'

import MenuIcon from '@mui/icons-material/Menu';
import i18next from 'i18next';
import { pxToRem } from './../../styles/utils';
const LanguageSelector = () => {
  const [language, setLanguage] = useState(i18next.language)
  const handleChangeLanguage = (event: SelectChangeEvent<string>) => {
    i18next.changeLanguage(event.target.value);
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
const NavBar = ({ handleOpenMenu }: INavBarProps) => {
  return (
    <Box display='flex'
      alignItems='center'
      justifyContent='space-between'
      sx={{
        boxSizing: 'border-box',
        height: '80px',
        width: '100vw',
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
          <MenuIcon sx={{ height: '30px', width: '30px' }} />
        </Box>
      </Box>
    </Box>
  )
}

export default NavBar