import MainLayout from '../Layout/MainLayout'
import { useCallback, useState } from 'react'

import { Cooperation, Main, Menu, OurMission, Purpose, Header } from '..'

interface IPageContainerProps {
  setActiveBlock: React.Dispatch<React.SetStateAction<string>>
  openMenu: () => void
}

const PageContainer = ({
  setActiveBlock,
  openMenu
}: IPageContainerProps) => (
  <>
    <Header openMenu={openMenu} />
    <MainLayout>
      <Main setActiveBlock={setActiveBlock} />
      <OurMission setActiveBlock={setActiveBlock} />
      <Purpose setActiveBlock={setActiveBlock} />
      <Cooperation setActiveBlock={setActiveBlock} />
    </MainLayout>
  </>
)

interface IMainPageProps {
  setActiveBlock: React.Dispatch<React.SetStateAction<string>>
  activeBlock: string
  isMenuOpen: boolean
  openMenu: () => void
  closeMenu: () => void
}

export default function MainPage({
  setActiveBlock, activeBlock,
}: IMainPageProps) {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const closeMenu = useCallback(() => setIsOpenMenu(false), [])
  const openMenu = useCallback(() => setIsOpenMenu(true), [])
  return (
    <> {!isOpenMenu ?
      <PageContainer
        setActiveBlock={setActiveBlock}
        openMenu={openMenu} /> :
      <Menu activeBlock={activeBlock} closeMenu={closeMenu} />}

    </>
  )
}

