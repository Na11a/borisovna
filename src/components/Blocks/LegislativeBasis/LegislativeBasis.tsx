import { useTranslation } from "react-i18next"
import BlockContainer from "../../Layout/BlockContainer"
import { Title } from "../../Title"
import { Box, Grid, List, Typography, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';

type ICooperationProps = {
  setActiveBlock: React.Dispatch<React.SetStateAction<string>>
}
const SECTION_NAME = 'legislativeBasis'
const LegislativeBasis = ({ setActiveBlock }: ICooperationProps) => {

  const { t } = useTranslation()

  return (
    <BlockContainer setActiveAnchor={setActiveBlock}
      anchor="legislative-bases">
      <Title anchor="legislative-bases" variant="secondary" name={t(`${SECTION_NAME}.title`)} />
      <Grid container direction="column">
        <List>
          <ListItem sx={{ alignItems: 'center', margin: 0, padding: 0 }}>
            <ListItemIcon sx={{ minWidth: '5px', margin: 1 }}>
              <CircleIcon fontSize="small" sx={{ color: 'black', margin: 0, fontSize: '5px' }} />
            </ListItemIcon>
            <ListItemText>
              <Typography variant='h6' children={t(`${SECTION_NAME}.1`)} />
            </ListItemText>
          </ListItem>
          <ListItem sx={{ alignItems: 'start', margin: 0, padding: 0 }}>
            <ListItemIcon sx={{ minWidth: '5px', margin: 1 }}>
              <CircleIcon fontSize="small" sx={{ color: 'black', margin: 0, fontSize: '5px' }} />
            </ListItemIcon>
            <ListItemText>
              <Typography variant='h6' children={t(`${SECTION_NAME}.2`)} />
            </ListItemText>
          </ListItem>

        </List>
      </Grid>
    </BlockContainer>
  )
}

export default LegislativeBasis
