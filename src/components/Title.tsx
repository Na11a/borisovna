import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
import { pxToRem } from './../styles/utils';

interface TitleProps {
  subTitle?: string,
  name: string
}

const style = {
  typography: "h4",
  textTransform: "uppercase",
  textAlign: "center",

  fontStyle: "normal",
  fontWeight: "900",
  fontSize: "32px",
  lineHeight: "120%",
}

export const Title = ({ subTitle, name }: TitleProps) => (
  <Box marginBottom={pxToRem(20)}>
    <Typography sx={{ ...style, color: "#045739" }}>
      {subTitle}
    </Typography>
    <Typography sx={{ ...style, color: "#F55F5F" }}>
      {name}
    </Typography>
  </Box>
)