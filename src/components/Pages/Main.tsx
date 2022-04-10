import { useTranslation } from 'react-i18next';
import Header from '../Header/Header';
import MainLayout from '../Layout/MainLayout';
import { useCallback, useState } from 'react'
import OurMission from '../Mission/OurMission';
import NavBar from '../NavBar/NavBar';
import { pxToRem } from './../../styles/utils';
import { Menu } from './../';
interface IPageContainerProps {
  setIsOpenMenu: React.Dispatch<React.SetStateAction<boolean>>

}

const PageContainer = ({ setIsOpenMenu }: IPageContainerProps) => (
  <>
    <NavBar handleOpenMenu={setIsOpenMenu} />
    <MainLayout>
      <Header />
      <OurMission />
    </MainLayout>
  </>
)

export default function Main() {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const closeMenu = useCallback(() => setIsOpenMenu(false), [])
  const openMenu = useCallback(()=>setIsOpenMenu(true),[])
  return (
    <> {!isOpenMenu ? <PageContainer setIsOpenMenu={openMenu} /> : <Menu setInOpenMenu={closeMenu}/>}

    </>
  )
}

