import { Button, Typography } from '@mui/material'
import React                  from 'react'
import { useTranslation }     from 'react-i18next'
import { useNavigate }        from 'react-router'


const DonateButton = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  return (
    <Button onClick={ () => navigate('/payment-details') }
            variant="contained"
            sx={ {
              padding        : '10px 10px',
              width          : { xs: '95%', md: '70%' },
              borderRadius   : '20px',
              backgroundColor: 'primary',
              fontWeight     : '700',
              transition     : '0.5s',
              '&:hover'      : { transform: 'scale(1.1)', transition: '0.5s' },
              '&:active'      : { transform: 'scale(0.9)', transition: '0.5s' },
            } }>
      <Typography variant="h5"
                  color="white">{ t('button.Donate') } </Typography>
    </Button>
  )
}

export default DonateButton