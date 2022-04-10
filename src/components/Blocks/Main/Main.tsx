import { Box, Container, List, ListItem, MenuItem, MenuList, Typography } from "@mui/material";
import i18next, { t } from "i18next";
import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { pxToRem } from "../../../styles/utils";
import MainLayout from "../../Layout/MainLayout";
import { Title } from "../../Title";
import DonateButton from '../../Buttons/Donate';
import BlockContainer from '../../Layout/BlockContainer';


type IHeaderProps = {
  setActiveBlock: React.Dispatch<React.SetStateAction<string>>
}

const anchor = 'main'

const Main = ({ setActiveBlock }: IHeaderProps) => {
  const { t } = useTranslation();
  return (
    <BlockContainer setActiveAnchor={setActiveBlock} anchor={anchor}>
      <Container >
        <Title anchor={anchor} variant="primary" subTitle={t("subtitle")} name={t('title')} />
      </Container>
      <Box component='img' src='./images/photo-for-banner.png'  />
      <Typography textAlign="left" color="black" fontWeight="400" >
        {t('description')}
      </Typography>
      <DonateButton />
    </BlockContainer >
  );
};
export default Main;

