import MainLayout from '../Layout/MainLayout'

import { Cooperation, Main, OurMission, Purpose, LegislativeBasis, InternationalActivities, Location } from '..'
import GoodDeeds from '../Blocks/GoogDeeds/GoodDeeds'

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
      <Location setActiveBlock={setActiveBlock} />
      <OurMission setActiveBlock={setActiveBlock} />
      <Purpose setActiveBlock={setActiveBlock} />
      <GoodDeeds setActiveBlock={setActiveBlock} />
      <Cooperation setActiveBlock={setActiveBlock} />
      <InternationalActivities setActiveBlock={setActiveBlock} />
      <LegislativeBasis setActiveBlock={setActiveBlock} />
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
