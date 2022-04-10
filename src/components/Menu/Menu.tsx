import { ListItem, List, Typography, Box } from '@mui/material'
import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next';
import { HashLink as Link } from 'react-router-hash-link';
import { pxToRem } from '../../styles/utils';
import { TAnchor } from '../../types/types';
import { DonateButton } from '../Buttons';
import MainLayout from '../Layout/MainLayout';

type IMenuItemProps = {
  setInOpenMenu: React.Dispatch<React.SetStateAction<boolean>>
  activeBlock: string
}

interface IListItemContainerProps {
  isActive: boolean,
  value: string,
  closeMenu: () => void
  anchor: TAnchor
}
const ListItemContainer = ({ value, closeMenu, isActive, anchor }: IListItemContainerProps) => {
  const handleSelectItem = () => {
    closeMenu()
  }
  return (
    <ListItem onClick={handleSelectItem} sx={{ marginTop: '25px' }}>
      <Typography width='100%'
        sx={{
          fontSize: '20px',
          fontWeight: '400',
          borderRadius: pxToRem(30),
          border: isActive ? '1px solid' : '0px',  
          borderColor:'secondary.main'
        }}
        textAlign='center'
      >
        <Link style={{ textDecoration: 'none', color: 'inherit' }} to={`/#${anchor}`}>{value}</Link>
      </Typography>
    </ListItem>)
}
const Menu = ({ setInOpenMenu, activeBlock }: IMenuItemProps) => {
  const closeMenu = useCallback(() => setInOpenMenu(false), [setInOpenMenu])
  const { t } = useTranslation()
  return (
    <MainLayout >
      <List>
        <ListItemContainer anchor='main' isActive={activeBlock === 'main'} closeMenu={closeMenu} value={t('menu.main')} />
        <ListItemContainer anchor='our-mission' isActive={activeBlock === 'our-mission'} closeMenu={closeMenu} value={t('menu.ourMission')} />
        <ListItemContainer anchor='fund-cooperation' isActive={activeBlock === 'fund-cooperation'} closeMenu={closeMenu} value={t('menu.fundCooperation')} />
        <ListItemContainer anchor='international-activities' isActive={activeBlock === 'international-activities'} closeMenu={closeMenu} value={t('menu.internationalActivities')} />
        <ListItemContainer anchor='purpose-and-activities' isActive={activeBlock === 'purpose-and-activities'} closeMenu={closeMenu} value={t('menu.purposeAndActivities')} />
        <ListItemContainer anchor='good-deeds' isActive={activeBlock === 'good-deeds'} closeMenu={closeMenu} value={t('menu.goodDeeds')} />
        <ListItemContainer anchor='details' isActive={activeBlock === 'details'} closeMenu={closeMenu} value={t('menu.details')} />
        <ListItemContainer anchor='contacts' isActive={activeBlock === 'contacts'} closeMenu={closeMenu} value={t('menu.contacts')} />
        <ListItemContainer anchor='legislative-bases' isActive={activeBlock === 'legislative-bases'} closeMenu={closeMenu} value={t('menu.legislativeBases')} />
      </List >
      <Box sx={{ marginTop: '60px' }}>
        <DonateButton />
      </Box>
    </MainLayout>
  )
}
export default Menu