import { Box, Typography } from "@mui/material"
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

interface TextWithLabelProps {
  label: string,
  text: string,
}
interface TextWithLabelAndCopyProps extends TextWithLabelProps {
  setIsCopy: React.Dispatch<React.SetStateAction<boolean>>

}

export const TextWithLabel = ({ label, text }: TextWithLabelProps) => (
  <Box sx={containerStyle}>
    <Typography sx={{ ...fontStyle, textTransform: "uppercase", color: "#045739" }}>
      {label}
    </Typography>
    <Typography sx={{ ...fontStyle, color: "#000000" }}>
      {text}
    </Typography>
  </Box>
)

export const TextWithLabelAndCopy = ({ label, text, setIsCopy }: TextWithLabelAndCopyProps) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(text)
    setIsCopy(true)
    setTimeout(() => {
      setIsCopy(false)
    }, 3000)
  }

  return (
    <Box sx={containerStyle}>
      <Typography sx={{ ...fontStyle, textTransform: "uppercase", color: "#045739" }}>
        {label}
      </Typography>
      <Box sx={clipboardTextContainerStyle}>
        <Typography sx={{ ...fontStyle, color: "#000000" }}>
          {text}
        </Typography>
        <ContentCopyIcon onClick={handleCopy} />
      </Box>
    </Box>
  )
}

const containerStyle = {
  display: "flex",
  gap: "10px",
  flexDirection: "column"
}

const clipboardTextContainerStyle = {
  display: "flex",
  gap: "10px",
  alignItems: "center",
  justifyContent: {
    xs: "space-between",
    sm: "flex-start"
  }
}

const fontStyle = {
  typography: "h5",

  textAlign: "left",
  fontFamily: "Roboto",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "130%"
}