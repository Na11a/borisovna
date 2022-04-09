import { Typography } from "@mui/material";

interface TitleProps {
  subTitle: string,
  name: string
}

const style = {
  typography: "h4",

  fontWeight: "bold",
  textTransform: "uppercase",
  textAlign: "center",
}

export const Title = ({ subTitle, name }: TitleProps) => (
  <>
    <Typography sx={{ ...style, color: "#045739" }}>
      {subTitle}
    </Typography>
    <Typography  sx={{ ...style, color: "#F55F5F" }}>
      {name}
    </Typography>
  </>
)