import { Box, List, ListItem, MenuItem, MenuList, Typography } from "@mui/material";
import i18next, { t } from "i18next";
import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { pxToRem } from "../../styles/utils";
import MainLayout from "../Layout/MainLayout";
import { Title } from "../Title";
import DonateButton from './../Buttons/Donate';
import BlockContainer from './../Layout/BlockContainer';


type Props = {}


const titles = [{ index: 1, route: "/" }, { index: 2, route: "/" }];

const NavBar = () => (
  <Box sx={{
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100vw",
    height: "100px",
    marginX: "-50px",
    backgroundColor: "#0d1c7c"
  }}>
    <Box sx={{ width: "150px" }}>icon</Box>
    <Menu />
  </Box>
);

const Menu = () => {

  return (
    <List style={{ display: "flex" }}>
      {titles.map(el => {
        const name = t(`pages.${el.index}`);
        return (
          <>
            <ListItem style={{ display: "inline-block", whiteSpace: "nowrap" }}>
              <NavLink
                className={({ isActive }: any) => (isActive ? "active" : "")}
                to={`${titles.find(e => e === el)!.route}`}
              >
                <Typography
                  sx={{
                    typography: "h5",
                    color: "#fff9ec",
                    textDecoration: "none",
                  }}
                  children={name}
                />
              </NavLink>
            </ListItem>

          </>
        );
      })}
    </List>
  );
};
const Header = () => {
  const { t } = useTranslation();
  const defaultMargin = pxToRem(20)
  return (
    <BlockContainer >
      <Box marginBottom={defaultMargin}>
        <Title subTitle={t("subtitle")} name={t('title')} />
      </Box>
      <Box component='img' src='./images/photo-for-banner.png' marginBottom={defaultMargin} />
      <Typography textAlign="left" color="black" fontWeight="400" marginBottom={defaultMargin}>
        {t('description')}
      </Typography>
      <DonateButton />
    </BlockContainer >
  );
};
export default Header;
