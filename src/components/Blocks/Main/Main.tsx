import { Box, List, ListItem, MenuItem, MenuList, Typography } from "@mui/material";
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
  const defaultMargin = pxToRem(20)
  return (
    <BlockContainer setActiveAnchor={setActiveBlock} anchor={anchor}>
      <Box marginBottom={defaultMargin}>
        <Title anchor={anchor} variant="primary" subTitle={t("subtitle")} name={t('title')} />
      </Box>
      <Box component='img' src='./images/photo-for-banner.png' marginBottom={defaultMargin} />
      <Typography textAlign="left" color="black" fontWeight="400" marginBottom={defaultMargin}>
        {t('description')}
      </Typography>
      <DonateButton />
    </BlockContainer >
  );
};
export default Main;

