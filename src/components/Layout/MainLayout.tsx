import * as React from "react"
import { pxToRem } from './../../styles/utils'
import { Container } from '@mui/material'
import { Header } from "..";
import { Menu } from './../'
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
        <Container sx={{
          paddingTop: pxToRem(80), paddingX: pxToRem(20), margin: 0,
        }}>
          <Header openMenu={openMenu} />
          {children}
        </Container> :
        <Menu closeMenu={closeMenu} activeBlock={activeBlock} />}
    </>
  )
}

export default MainLayout
