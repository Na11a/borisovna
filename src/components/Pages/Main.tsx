import React, { useEffect } from 'react'
import { MainLayout } from '../'
import { useTranslation } from 'react-i18next';
import { Box, Typography } from '@mui/material';
import Header from '../Header/Header';
const items = [{ index: 1, name: 'title' }, { index: 2, name: 'description' }]

export default function Main() {
  const { t } = useTranslation()
  const title = t('title').toLowerCase()
  const description = t('description').toLowerCase()
  return (
    <Header />
  )
}
