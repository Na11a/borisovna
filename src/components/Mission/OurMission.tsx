import React from 'react'
import { Title } from '../Title';
import { Typography } from '@mui/material';
import Box from '@mui/system/Box/Box';
import BlockContainer from '../Layout/BlockContainer';
import { defaultBlockMargin } from '../../styles/utils';
import { useTranslation } from 'react-i18next';

interface IOurMissionProps {
  setActiveBlock: React.Dispatch<React.SetStateAction<string>>
}

const OurMission = ({ setActiveBlock }: IOurMissionProps) => {
  const { t } = useTranslation()

  return (
    <BlockContainer setActiveAnchor={setActiveBlock} anchor={'our-mission'}>
      <Box flex='100%'>
        <Title anchor={'our-mission'} variant='secondary' name={t('ourMission.titleBlock.title')} />
      </Box>
      <Typography flex='50%' textAlign='left' mb={defaultBlockMargin} children={t('ourMission.titleBlock.description')} />
      <Box component='img' borderRadius='50%' src='./images/our-mission.png' marginBottom={defaultBlockMargin} />
      <Box textAlign='left'>
        <Typography sx={{
          fontWeight: '700',
          textTransform: 'uppercase'
        }}
          children={t('ourMission.descriptionBlock.title')} />
        <Typography children={t('ourMission.descriptionBlock.block1')} />
        <Typography children={t('ourMission.descriptionBlock.block2')} />
      </Box>
    </BlockContainer >
  )
}

export default OurMission