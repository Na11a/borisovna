import { Typography } from "@mui/material";

interface TitleProps {
  title: string,
  name: string
}

const titleStyle = {
  fontWeight: "bold",
  textTransform: "uppercase",
  color: "#045739"
}

const nameStyle = { 
  textTransform: "uppercase",
  color: '#F55F5F' 
}

export const Title = ({ title, name }: TitleProps) => (
  <>
    <Typography textAlign="center" variant="h4" sx={titleStyle}>
      {title}
    </Typography>
    <Typography textAlign="center" variant="h4" sx={nameStyle}>
      {name}
    </Typography>
  </>
)