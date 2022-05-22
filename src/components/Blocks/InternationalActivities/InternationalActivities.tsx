import { useTranslation } from "react-i18next"
import BlockContainer from "../../Layout/BlockContainer"
import { Title } from "../../Title"
import { Box, Grid, Typography } from '@mui/material';

type ICooperationProps = {
  setActiveBlock: React.Dispatch<React.SetStateAction<string>>
}
const SECTION_NAME = 'internationalActivity'
const InternationalActivities = ({ setActiveBlock }: ICooperationProps) => {

  const { t } = useTranslation()

  return (
    <BlockContainer setActiveAnchor={setActiveBlock}
      anchor="international-activities">
      <Title anchor="international-activities" variant="secondary" name={t(`${SECTION_NAME}.title`)} />
      <Grid container direction="column">
        <Box component={'img'} src='./images/internationalActivity.png' sx={{ margin: '30px', padding: '15px' }} />
        <Typography variant='h6' children={t(`${SECTION_NAME}.1`)} />
        <Typography variant='h6' children={t(`${SECTION_NAME}.2`)} />
      </Grid>
    </BlockContainer>
  )
}

export default InternationalActivities
