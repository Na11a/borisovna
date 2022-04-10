import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
import { fontSize } from "@mui/system";
import { pxToRem } from './../../styles/utils';
type TVariant = "primary" | "secondary"

interface TitleProps {
  subTitle?: string,
  name: string
  variant?: TVariant
}

const basicStyle = {
  typography: "h4",
  textTransform: "uppercase",
  textAlign: "center",
  fontStyle: "normal",
  fontWeight: "900",
  lineHeight: "120%",
}

const primaryStyle = {
  fontSize: "32px",
  ...basicStyle
}
const secondaryStyle = {
  fontSize: "24px",
  ...basicStyle
}


export const Title = ({ subTitle, name, variant }: TitleProps) => (
  <Box marginBottom={pxToRem(20)}>
    <Typography sx={{
      ...(variant === 'primary' ? primaryStyle : secondaryStyle),
      color: "#045739"
    }}
    >
      {subTitle}
    </Typography>
    <Typography sx={{
      ...(variant === 'primary' ? primaryStyle : secondaryStyle),
      color: "#F55F5F"
    }} >
      {name}
    </Typography>
  </Box >
)