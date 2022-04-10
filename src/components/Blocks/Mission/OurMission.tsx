import React                     from 'react'
import { Title }                         from '../../Title'
import { Container, styled, Typography } from '@mui/material'
import BlockContainer                    from '../../Layout/BlockContainer'
import { defaultBlockMargin }    from '../../../styles/utils'
import { useTranslation }        from 'react-i18next'


interface IOurMissionProps {
  setActiveBlock: React.Dispatch<React.SetStateAction<string>>
}

const OurMission = ({ setActiveBlock }: IOurMissionProps) => {
  const { t } = useTranslation()
  const Img = styled("img")({})
  return (
    <BlockContainer setActiveAnchor={ setActiveBlock } anchor={ 'our-mission' }>
      <Container>
        <Title anchor={ 'our-mission' }
               variant="secondary"
               name={ t('ourMission.titleBlock.title') }/>
      </Container>
      <Typography variant="h6"
                  textAlign="left"
                  mb={ defaultBlockMargin }
                  children={ t('ourMission.titleBlock.description') }/>
      <Container sx={ {display:'flex',justifyContent:'center', } }>
        <Img src="./images/our-mission.png" alt=" photo" sx={{borderRadius:'50%'}}/>
      </Container>
      <Container sx={ { textAlign: 'left' } }>
        <Typography  variant='h6' fontWeight='700' sx={ {
          textTransform: 'uppercase',
        } } children={ t('ourMission.descriptionBlock.title') }/>
        <Typography variant='h6' children={ t('ourMission.descriptionBlock.block1') }/>
        <Typography variant='h6' children={ t('ourMission.descriptionBlock.block2') }/>
      </Container>
    </BlockContainer>
  )
}

export default OurMission