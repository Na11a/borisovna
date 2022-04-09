import * as React from "react";
import Box from "@mui/material/Box";

import { Header } from "..";
import { pxToRem } from './../../styles/utils';

interface IMainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: IMainLayoutProps) => {
  return (
    <Box sx={{ paddingX: pxToRem(20), margin: 0 }}>
    </Box>
  );
};

export default MainLayout;
