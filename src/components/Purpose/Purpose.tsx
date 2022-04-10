import { useTranslation } from "react-i18next"
import { Box } from "@mui/system"
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

const text1 = "Сприяння та надання фінансової, організаційної, матеріальної, психологічної, духовної благодійної допомоги тим, хто її потребує"
const text2 = "Допомога інвалідам, сиротам, багатодітним сім’ям, незахищеним верствам населення, дітям батьки яких були учасниками Революції Гідності, АТО, ООС та військової російської агресії"

export const Purpose = () => {
  const { t } = useTranslation()

  return (
    <Box>
      <PurposeCard icon={AttachMoneyIcon} text={text1}/>
      <PurposeCard icon={EscalatorWarningIcon} text={text2}/>
      <PurposeCard icon={MusicNoteIcon} text={text1}/>
      <PurposeCard icon={SchoolIcon} text={text1}/>
      <PurposeCard icon={MenuBookIcon} text={text1}/>
      <PurposeCard icon={FlagIcon} text={text1}/>
      <PurposeCard icon={FitnessCenterIcon} text={text1}/>
      <PurposeCard icon={WbSunnyIcon} text={text1}/>
      <PurposeCard icon={FavoriteIcon} text={text1}/>
    </Box>
  )
}