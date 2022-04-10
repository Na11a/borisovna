import { useTranslation } from "react-i18next"
import { Title }          from "../../Title"
import { PurposeCard }    from "./PurposeCard"

import AttachMoneyIcon      from "@mui/icons-material/AttachMoney"
import EscalatorWarningIcon from "@mui/icons-material/EscalatorWarning"
import MusicNoteIcon        from "@mui/icons-material/MusicNote"
import SchoolIcon           from "@mui/icons-material/School"
import MenuBookIcon         from "@mui/icons-material/MenuBook"
import FlagIcon             from "@mui/icons-material/Flag"
import FitnessCenterIcon    from "@mui/icons-material/FitnessCenter"
import WbSunnyIcon          from "@mui/icons-material/WbSunny"
import FavoriteIcon         from "@mui/icons-material/Favorite"
import BlockContainer       from "../../Layout/BlockContainer"
import { Container }        from '@mui/material'

const SECTION_NAME = "PURPOSE AND DIRECTIONS OF THE FOUNDATION"

const iconOrder = [
  AttachMoneyIcon,
  EscalatorWarningIcon,
  MusicNoteIcon,
  SchoolIcon,
  MenuBookIcon,
  FlagIcon,
  FitnessCenterIcon,
  WbSunnyIcon,
  FavoriteIcon,
]

interface IPurposeProps {
  setActiveBlock: React.Dispatch<React.SetStateAction<string>>
}

const Purpose = ({ setActiveBlock }: IPurposeProps) => {
  const { t } = useTranslation()

  return (
    <BlockContainer anchor="purpose-and-activities"
                    setActiveAnchor={ setActiveBlock }>
      <Title anchor="purpose-and-activities"
             name={ t(`${ SECTION_NAME }.TITLE`) }/>
      <Container>
        {
          iconOrder.map((icon, i) => (
            <PurposeCard key={ i }
                         icon={ icon }
                         text={ t(`${ SECTION_NAME }.${ i + 1 }`) }/>
          ))
        }
      </Container>
    </BlockContainer>
  )
}

export default Purpose