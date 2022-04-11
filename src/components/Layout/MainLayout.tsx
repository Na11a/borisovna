import * as React from "react"
import { pxToRem }        from './../../styles/utils'
import { Box} from '@mui/material'
import { Header }         from "..";
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
        <Box sx={{
          minWidth:'100vw',
          margin: 0, 
          boxSizing:'border-box',
          marginTop: pxToRem(100), 
          padding:'0 10px',
        }}>
          <Header openMenu={openMenu} />
          {children}
        </Box> :
        <Menu closeMenu={closeMenu} activeBlock={activeBlock} />}
    </>
  )
}

export default MainLayout
