import { useTranslation } from 'react-i18next';
import Header from '../Header/Header';

export default function Main() {
  const { t } = useTranslation()

  return (
    <>
      <Header />
    </>
  )
}
