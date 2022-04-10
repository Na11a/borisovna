import React from 'react'
import ChurchOutlinedIcon from '@mui/icons-material/ChurchOutlined'
import AccountBalanceOutlinedIcon
  from '@mui/icons-material/AccountBalanceOutlined'
import AssuredWorkloadOutlinedIcon
  from '@mui/icons-material/AssuredWorkloadOutlined'
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined'
import FoundationOutlinedIcon from '@mui/icons-material/FoundationOutlined'
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline'
import { useTranslation } from 'react-i18next'
import { Title } from '../../Title'
import { BlockContainer } from '../../index'
import { Grid, Typography } from '@mui/material'

const SECTION_NAME = "cooperation"

const icons = [
  ChurchOutlinedIcon,
  AssuredWorkloadOutlinedIcon,
  AccountBalanceOutlinedIcon,
  ApartmentOutlinedIcon,
  FoundationOutlinedIcon,
  PeopleOutlineIcon,
]

const cardWrapperStyle = {
  flexWrap: 'nowrap',
  margin: '15px 0',
  alignItems: 'center',
}
const cardItemStyle = {
  width: '70px',
  height: '70px',
  fill: '#045739',
  margin: '0 20px',
}


type ICooperationProps = {
  setActiveBlock: React.Dispatch<React.SetStateAction<string>>
}
const Cooperation = ({ setActiveBlock }: ICooperationProps) => {
  
  const { t } = useTranslation()

  return (
    <BlockContainer setActiveAnchor={setActiveBlock} anchor='fund-cooperation'>
      <Title anchor='fund-cooperation' name={t(`${SECTION_NAME}.title`)} />

      <Grid container direction="column">

        {icons.map((Item, index) => (
          <Grid container p={1} sx={cardWrapperStyle} key={index}>

            {<Item sx={{ ...cardItemStyle, order: `${index % 2 === 0 ? 1 : -1}` }} />}

            <Typography sx={{ flexGrow: 1, fontWeight: '500' }}>
              {t(`${SECTION_NAME}.${index + 1}`)}
            </Typography>
          </Grid>
        ))}

      </Grid>
    </BlockContainer>
  )
}

export default Cooperation;

