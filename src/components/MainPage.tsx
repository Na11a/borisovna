import React from 'react'
import { useParams } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';

type Props = {}

const MainPage = ({ }: Props) => {
  const { language } = useParams()

  return (
    <MainLayout>
      {language === 'uk' ? 'hello' : 'privet'}
    </MainLayout>
  )
}

export default MainPage;