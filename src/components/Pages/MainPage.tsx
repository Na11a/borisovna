import MainLayout from '../Layout/MainLayout'
import { useCallback, useState } from 'react'

import { Cooperation, Main, OurMission, Purpose, Header } from '..'

interface IPageContainerProps {
  setActiveBlock: React.Dispatch<React.SetStateAction<string>>
  activeBlock: string
}
const PageContainer = ({
  setActiveBlock, activeBlock
}: IPageContainerProps) => (
  <>
    <MainLayout activeBlock={activeBlock}>
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
}

export default function MainPage({
  setActiveBlock, activeBlock
}: IMainPageProps) {
  return (
    <PageContainer
      activeBlock={activeBlock}
      setActiveBlock={setActiveBlock}
    />
  )
}
