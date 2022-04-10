import { useTranslation } from "react-i18next"
import { Box } from "@mui/system"
import { Title } from "../Title"
import { PurposeCard } from "./PurposeCard"

import AttachMoneyIcon from "@mui/icons-material/AttachMoney"
import EscalatorWarningIcon from "@mui/icons-material/EscalatorWarning"
import MusicNoteIcon from "@mui/icons-material/MusicNote"
import SchoolIcon from "@mui/icons-material/School"
import MenuBookIcon from "@mui/icons-material/MenuBook"
import FlagIcon from "@mui/icons-material/Flag"
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter"
import WbSunnyIcon from "@mui/icons-material/WbSunny"
import FavoriteIcon from "@mui/icons-material/Favorite"

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
  FavoriteIcon
]

export const Purpose = () => {
  const { t } = useTranslation()

  return (
    <Box>
      <Title name={t('ourMission.titleBlock.title')}/>
      {
        iconOrder.map((icon, i) => (
          <PurposeCard
            key={i}
            icon={icon}
            text={t(`${SECTION_NAME}.${i + 1}`)}
          />
        ))
      }
    </Box>
  )
}