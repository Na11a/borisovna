import { Button } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

type Props = {}


const DonateButton = (props: Props) => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  return (
    <Button   
    onClick={()=>navigate('/payment-details')}
    sx={{
        fontSize: '18px',
        borderRadius: '20px',
        backgroundColor: '#045739',
        width: '100%',
        color: 'white',
        fontWeight: '700'
      }}
    >
      {t('button.Donate')}
    </Button>
  )
}

export default DonateButton