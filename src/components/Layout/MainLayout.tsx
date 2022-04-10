import * as React    from "react"
import { pxToRem }   from './../../styles/utils'
import { Container } from '@mui/material'

interface IMainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: IMainLayoutProps) => {
  return (
    <Container sx={ {
      paddingTop: pxToRem(80), paddingX: pxToRem(20), margin: 0,
    } }>
      { children }
    </Container>
  )
}

export default MainLayout
