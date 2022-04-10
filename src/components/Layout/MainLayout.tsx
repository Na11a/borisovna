import * as React from "react"
import { pxToRem }        from './../../styles/utils'
import { Box, Container } from '@mui/material'
import { Header }         from "..";
import { Menu } from './../'
import { flexbox } from "@mui/system";
interface IMainLayoutProps {
  children: React.ReactNode;
  activeBlock: string
}

const MainLayout = ({ children, activeBlock }: IMainLayoutProps) => {
  const [isOpenMenu, setIsOpenMenu] = React.useState(false)

  const openMenu = React.useCallback(() => {
    setIsOpenMenu(true)
  }, [])
  const closeMenu = React.useCallback(() => {
    setIsOpenMenu(false)
  }, [])
  return (
    <>
      {!isOpenMenu ?
        <Box sx={{
          minWidth:'100vw',
          margin: 0, 
          marginTop: pxToRem(100), 
          padding: 0,
          display: 'flex',
          flexDirection:'column',
          alignItems:'center'
        }}>
          <Header openMenu={openMenu} />
          {children}
        </Box> :
        <Menu closeMenu={closeMenu} activeBlock={activeBlock} />}
    </>
  )
}

export default MainLayout
