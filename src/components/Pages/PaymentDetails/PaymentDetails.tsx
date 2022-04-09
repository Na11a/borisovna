import { useTranslation } from 'react-i18next'

import { MainLayout } from '../../'
import { Title } from '../../Title'

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
      <Title title={TITLE} name={NAME}/>
      <div>
        <div>
          {ADDRESS_TITLE}
          {ADDRESS_CONTENT}
        </div>
        <div>
          {ACCOUNT_TITLE}
          {BANK_ACCOUNT}
        </div>
        <div>
          {BANK_NAME_TITLE}
          {BANK_NAME_CONTENT}
        </div>
        <div>
          {SOME_WEIRD_TITLE}
          {EDRPOU}
        </div>
      </div>
    </MainLayout>
  )
}