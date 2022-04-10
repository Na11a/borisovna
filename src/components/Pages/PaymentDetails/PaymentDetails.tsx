import { Box } from "@mui/material"
import { useTranslation } from "react-i18next"

import { BlockContainer, MainLayout } from "../../"
import { Title } from "../../Title"
import { TextWithLabel, TextWithLabelAndCopy } from "./TextWithLabel"

const EDRPOU = "38368563"
const BANK_ACCOUNT = "UA963052990000026004011602838"

export const PaymentDetails = () => {
  const { t } = useTranslation()

  return (
    <MainLayout>
      <BlockContainer direction="column">
        <Title 
          subTitle={t("PAYMENT_DETAILS_PAGE.TITLE")}
          name={t("PAYMENT_DETAILS_PAGE.NAME")}
        />
        <Box sx={dataContainerStyle}>
          <TextWithLabel 
            label={t("PAYMENT_DETAILS_PAGE.CONTENT.ADDRESS_TITLE")}
            text={t("PAYMENT_DETAILS_PAGE.CONTENT.ADDRESS_CONTENT")}
          />
          <TextWithLabelAndCopy
            label={t("PAYMENT_DETAILS_PAGE.CONTENT.ACCOUNT_TITLE")}
            text={BANK_ACCOUNT}
          />
          <TextWithLabel
            label={t("PAYMENT_DETAILS_PAGE.CONTENT.BANK_NAME_TITLE")}
            text={t("PAYMENT_DETAILS_PAGE.CONTENT.BANK_NAME_CONTENT")}
          />
          <TextWithLabelAndCopy
            label={t("PAYMENT_DETAILS_PAGE.CONTENT.BANK_NAME_CONTENT")}
            text={EDRPOU}
          />
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