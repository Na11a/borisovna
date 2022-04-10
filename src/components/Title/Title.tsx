import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
import { fontSize } from "@mui/system";
import { TAnchor } from "../../types/types";
import { pxToRem } from './../../styles/utils';
type TVariant = "primary" | "secondary"

interface TitleProps {
  subTitle?: string,
  name: string
  variant?: TVariant
  anchor: TAnchor
}

const basicStyle = {
  textTransform: "uppercase",
  textAlign: "center",
  fontStyle: "normal",
  fontWeight: "900",
  lineHeight: "120%",
}

const primaryStyle = {
  ...basicStyle,

}
const secondaryStyle = {
  ...basicStyle,
}

export const Title = ({ subTitle, name, variant, anchor }: TitleProps) => (
  <Box marginBottom={pxToRem(20)}>
    <Typography
      variant='h5'
      id={anchor}
      sx={{
        ...(variant === 'primary' ? primaryStyle : secondaryStyle),
        color: "primary.main"
      }}
    >
      {subTitle}
    </Typography>
    <Typography variant='h5' sx={{
      ...(variant === 'primary' ? primaryStyle : secondaryStyle),
      color: "secondary.main"
    }} >
      {name}
    </Typography>
  </Box >
)