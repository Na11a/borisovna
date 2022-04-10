import { ListItem, List, Typography, Box } from '@mui/material'
import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next';
import { DonateButton } from '../Buttons';
import MainLayout from '../Layout/MainLayout';

type IMenuItemProps = {
  setInOpenMenu: React.Dispatch<React.SetStateAction<boolean>>
}
const ListItemContainer = ({ value, closeMenu }: { value: string, closeMenu: React.MouseEventHandler<HTMLLIElement> }) => (
  <ListItem onClick={closeMenu} sx={{ marginTop: '25px'}}>
    <Typography width='100%' sx={{fontSize: '20px', fontWeight: '400'}} textAlign='center' children={value} />
  </ListItem>
)
const Menu = ({ setInOpenMenu }: IMenuItemProps) => {
  const closeMenu = useCallback(() => setInOpenMenu(false), [setInOpenMenu])
  const { t } = useTranslation()
  return (
    <MainLayout >
      <List>
        <ListItemContainer closeMenu={closeMenu} value={t('menu.main')} />
        <ListItemContainer closeMenu={closeMenu} value={t('menu.ourMission')} />
        <ListItemContainer closeMenu={closeMenu} value={t('menu.fundCooperation')} />
        <ListItemContainer closeMenu={closeMenu} value={t('menu.internationalActivities')} />
        <ListItemContainer closeMenu={closeMenu} value={t('menu.purposeAndActivities')} />
        <ListItemContainer closeMenu={closeMenu} value={t('menu.goodDeeds')} />
        <ListItemContainer closeMenu={closeMenu} value={t('menu.details')} />
        <ListItemContainer closeMenu={closeMenu} value={t('menu.contacts')} />
        <ListItemContainer closeMenu={closeMenu} value={t('menu.legislativeBases')} />
      </List >
      <Box sx={{ marginTop: '60px' }}>
        <DonateButton />
      </Box>
    </MainLayout>
  )
}
export default Menu