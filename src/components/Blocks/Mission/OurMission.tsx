import React                     from 'react'
import { Title }                 from '../../Title'
import { Container, Typography } from '@mui/material'
import BlockContainer            from '../../Layout/BlockContainer'
import { defaultBlockMargin }    from '../../../styles/utils'
import { useTranslation }        from 'react-i18next'


interface IOurMissionProps {
  setActiveBlock: React.Dispatch<React.SetStateAction<string>>
}

const OurMission = ({ setActiveBlock }: IOurMissionProps) => {
  const { t } = useTranslation()

  return (
    <BlockContainer setActiveAnchor={ setActiveBlock } anchor={ 'our-mission' }>
      <Container>
        <Title anchor={ 'our-mission' }
               variant="secondary"
               name={ t('ourMission.titleBlock.title') }/>
      </Container>
      <Typography flex="50%"
                  textAlign="left"
                  mb={ defaultBlockMargin }
                  children={ t('ourMission.titleBlock.description') }/>
      <Container sx={ {
        borderRadius: '50%', marginBottom: { defaultBlockMargin },
      } }>
        <img src="./images/our-mission.png" alt=" photo"/>
      </Container>
      <Container sx={ { textAlign: 'left' } }>
        <Typography sx={ {
          fontWeight   : '700',
          textTransform: 'uppercase',
        } } children={ t('ourMission.descriptionBlock.title') }/>
        <Typography children={ t('ourMission.descriptionBlock.block1') }/>
        <Typography children={ t('ourMission.descriptionBlock.block2') }/>
      </Container>
    </BlockContainer>
  )
}

export default OurMission