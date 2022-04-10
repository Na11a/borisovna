import { Button, Container }                   from "@mui/material"
import { useTranslation }                      from "react-i18next"
import { useEffect, useState }                 from 'react'
import { BlockContainer, MainLayout }          from "../../"
import { Title }                               from "../../Title"
import { TextWithLabel, TextWithLabelAndCopy } from "./TextWithLabel"
import { useNavigate }                         from "react-router"
import { pxToRem }                             from './../../../styles/utils'

const EDRPOU = "38368563"
const BANK_ACCOUNT = "UA963052990000026004011602838"


const SuccessCopy = ({ isCopy }: { isCopy: boolean }) => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [buttonText, setButtonText] = useState(t('button.returnBack'))
  useEffect(() => {
    if (isCopy) {
      setButtonText(t('button.copied'))
      return
    }
    setButtonText(t('button.returnBack'))
  }, [isCopy, t])
  return (
    <Button sx={ {
      color       : '#045739',
      width       : '100%',
      boxShadow   : ' 0px 2px 8px rgba(0, 0, 0, 0.1)',
      borderRadius: pxToRem(30),
    } } onClick={ () => {
      navigate('/')
    } }>
      { buttonText }
    </Button>
  )
}
const anchor = 'main'

interface IPaymentDetailsProps {
  setActiveBlock: React.Dispatch<React.SetStateAction<string>>
}

export const PaymentDetails = ({ setActiveBlock }: IPaymentDetailsProps) => {
  const [isCopy, setIsCopy] = useState(false)
  const { t } = useTranslation()

  return (
    <MainLayout>
      <BlockContainer anchor={ anchor }
                      setActiveAnchor={ setActiveBlock }
                      direction="column">
        <Title anchor={ anchor }
               subTitle={ t("PAYMENT_DETAILS_PAGE.TITLE") }
               name={ t("PAYMENT_DETAILS_PAGE.NAME") }/>
        <Container sx={ dataContainerStyle }>
          <TextWithLabel label={ t("PAYMENT_DETAILS_PAGE.CONTENT.ADDRESS_TITLE") }
                         text={ t("PAYMENT_DETAILS_PAGE.CONTENT.ADDRESS_CONTENT") }/>
          <TextWithLabelAndCopy label={ t("PAYMENT_DETAILS_PAGE.CONTENT.ACCOUNT_TITLE") }
                                text={ BANK_ACCOUNT }
                                setIsCopy={ setIsCopy }/>
          <TextWithLabel label={ t("PAYMENT_DETAILS_PAGE.CONTENT.BANK_NAME_TITLE") }
                         text={ t("PAYMENT_DETAILS_PAGE.CONTENT.BANK_NAME_CONTENT") }/>
          <TextWithLabelAndCopy label={ t("PAYMENT_DETAILS_PAGE.CONTENT.BANK_NAME_CONTENT") }
                                text={ EDRPOU }
                                setIsCopy={ setIsCopy }/>
        </Container>
      </BlockContainer>
      <SuccessCopy isCopy={ isCopy }/>
    </MainLayout>
  )
}

const dataContainerStyle = {
  display       : "flex",
  flexDirection : "column",
  justifyContent: "center",
  gap           : "30px",
  marginY       : pxToRem(40),
}