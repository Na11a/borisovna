import { useTranslation } from 'react-i18next';
import Header from '../Header/Header';
import MainLayout from '../Layout/MainLayout';
import OurMission from '../Mission/OurMission';
import { pxToRem } from './../../styles/utils';


export default function Main() {

  return (
    <MainLayout>
      <Header />
      <OurMission />
    </MainLayout>
  )
}
