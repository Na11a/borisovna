import { Button } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next';

type Props = {}


const DonateButton = (props: Props) => {
  const { t } = useTranslation()
  return (
    <Button sx={
      {
        fontSize: '18px',
        borderRadius: '20px',
        backgroundColor: '#045739',
        width: '100%',
        color: 'white',
        fontWeight: '700'
      }
    }
    >
      {t('button.Donate')}
    </Button>
  )
}

export default DonateButton