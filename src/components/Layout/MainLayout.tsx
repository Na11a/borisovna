import MenuItem from "@mui/material/MenuItem/MenuItem";
import Select from "@mui/material/Select/Select";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import { availableLanguages } from "utils/i18";

import styles from "./MainLayout.module.scss";

type TMainLayoutProps = {
  children: React.ReactNode;
};
type TRoutes = {
  name: string;
};

const routesEn: TRoutes[] = [{ name: "main" }];
const routesUk: TRoutes[] = [{ name: "головна" }];
const NavBar = (routes: TRoutes[]) => (
  <>
    {routes.map((route) => (
      <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/">
        {route.name}
      </NavLink>
    ))}
  </>
);

const MainLayout = ({ children }: TMainLayoutProps) => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div>
        {t("learnReact")}
      </div>
      
    </>
  );
};
export default MainLayout;
