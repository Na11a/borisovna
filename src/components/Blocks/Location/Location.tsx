import { useTranslation } from "react-i18next"
import BlockContainer from "../../Layout/BlockContainer"
import { Title } from "../../Title"
import { Box, Grid, Typography } from '@mui/material';

type ILocationProps = {
  setActiveBlock: React.Dispatch<React.SetStateAction<string>>
}
const SECTION_NAME = 'geography-of-activity'
const Location = ({ setActiveBlock }: ILocationProps) => {

  const { t } = useTranslation()

  return (
    <BlockContainer setActiveAnchor={setActiveBlock}
      anchor="geography-of-activity">
      <Title anchor="geography-of-activity" variant="secondary" name={t(`${SECTION_NAME}.title`)} />
      <Grid container direction="column">
        <Box component={'img'} src='./images/cherkasy-location.png'/>
        <Typography variant='h6' children={t(`${SECTION_NAME}.description`)} />
      </Grid>
    </BlockContainer>
  )
}

export default Location
