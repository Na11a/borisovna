import { SvgIconTypeMap, Box, Typography } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

interface PurposeCardProps {
  icon: OverridableComponent<SvgIconTypeMap>,
  text: string
}

export const PurposeCard = ({ icon: Icon, text }: PurposeCardProps) => (
  <Box sx={containerStyle}>
    <Icon sx={iconStyle}/>
    <Typography>{text}</Typography>
  </Box>
)

const iconStyle = { 
  color: "#045739",
  width: "50px",
  height: "50px",
  padding: "0px 15px 0px 15px"
}

const containerStyle = {
  marginTop: "20px",
  
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  boxShadow: "4px 4px 2px rgba(24, 85, 130, 0.1)",
}