import { Box } from "@mui/material"
import { useTranslation } from "react-i18next"

import { BlockContainer, MainLayout } from "../../"
import { Title } from "../../Title"
import { TextWithLabel, TextWithLabelAndCopy } from "./TextWithLabel"

const EDRPOU = "38368563"
const BANK_ACCOUNT = "UA963052990000026004011602838"

export const PaymentDetails = () => {
  const { t } = useTranslation()
  
  const {
    TITLE,
    NAME,
    CONTENT: {
      ADDRESS_TITLE, 
      ADDRESS_CONTENT, 
      ACCOUNT_TITLE, 
      BANK_NAME_TITLE, 
      BANK_NAME_CONTENT, 
      SOME_WEIRD_TITLE
    } 
  } = t("PAYMENT_DETAILS_PAGE")

  return (
    <MainLayout>
      <BlockContainer direction="column">
        <Title subTitle={TITLE} name={NAME}/>
        <Box sx={dataContainerStyle}>
          <TextWithLabel label={ADDRESS_TITLE} text={ADDRESS_CONTENT}/>
          <TextWithLabelAndCopy label={ACCOUNT_TITLE} text={BANK_ACCOUNT}/>
          <TextWithLabel label={BANK_NAME_TITLE} text={BANK_NAME_CONTENT}/>
          <TextWithLabelAndCopy label={SOME_WEIRD_TITLE} text={EDRPOU}/>
        </Box>
      </BlockContainer>
    </MainLayout>
  )
}

const dataContainerStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "30px",
  marginTop: "40px"
}