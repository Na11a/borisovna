import { Button, Typography } from '@mui/material'
import React                  from 'react'
import { useTranslation }     from 'react-i18next'
import { useNavigate }        from 'react-router'


const DonateButton = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  return (
    <Button onClick={ () => navigate('/payment-details') } variant='contained' sx={ {
      padding        : '10px 20px',
      borderRadius   : '20px',
      backgroundColor: 'primary',
      fontWeight     : '700',
    } }>
      <Typography variant="h5"
                  color="white">{ t('button.Donate') } </Typography>
    </Button>
  )
}

export default DonateButton