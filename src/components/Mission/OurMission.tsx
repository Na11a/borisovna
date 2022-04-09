import { t } from 'i18next';
import React from 'react'
import { Title } from '../Title';
import { Typography } from '@mui/material';
import Box from '@mui/system/Box/Box';
import BlockContainer from '../Layout/BlockContainer';
import { defaultBlockMargin } from '../../styles/utils';



const OurMission = () => {
  const { titleBlock, descriptionBlock }: any = t('ourMission')
  return (
    <BlockContainer>
      <Box flex='100%'>
        <Title name={titleBlock.title} />
      </Box>
      <Typography flex='50%' textAlign='left' children={titleBlock.description} />
      <Box component='img' borderRadius='50%' src='./images/our-mission.png' marginBottom={defaultBlockMargin} />
      <Box textAlign='left'>
        <Typography sx={{
          fontWeight: '700',
          textTransform: 'uppercase'
        }} children={`${descriptionBlock.title}:`} />
        <Typography children={descriptionBlock.block1} />
        <Typography children={descriptionBlock.block2} />
      </Box>
    </BlockContainer >
  )
}

export default OurMission