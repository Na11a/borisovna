import { useTranslation } from 'react-i18next';
import MainLayout from '../Layout/MainLayout';
import { useCallback, useState } from 'react'
import NavBar from '../Header/Header';
import { Cooperation, Main, Purpose, OurMission } from '..'
import { Menu } from '..';
interface IPageContainerProps {
  setIsOpenMenu: React.Dispatch<React.SetStateAction<boolean>>
  setActiveBlock: React.Dispatch<React.SetStateAction<string>>
}

const PageContainer = ({ setIsOpenMenu, setActiveBlock }: IPageContainerProps) => (
  <>
    <NavBar handleOpenMenu={setIsOpenMenu} />
    <MainLayout>
      <Main setActiveBlock={setActiveBlock} />
      <OurMission setActiveBlock={setActiveBlock} />
      <Purpose setActiveBlock={setActiveBlock} />
      <Cooperation setActiveBlock={setActiveBlock}/>
    </MainLayout>
  </>
)
interface IMainPageProps {
  setActiveBlock: React.Dispatch<React.SetStateAction<string>>
  activeBlock: string
}
export default function MainPage({ setActiveBlock, activeBlock }: IMainPageProps) {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const closeMenu = useCallback(() => setIsOpenMenu(false), [])
  const openMenu = useCallback(() => setIsOpenMenu(true), [])
  return (
    <> {!isOpenMenu ? <PageContainer setActiveBlock={setActiveBlock} setIsOpenMenu={openMenu} /> : <Menu activeBlock={activeBlock} setInOpenMenu={closeMenu} />}

    </>
  )
}

