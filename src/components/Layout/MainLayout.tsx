import * as React from "react";
import Box from "@mui/material/Box";

import { Header } from "..";

interface IMainLayoutProps {
    children: React.ReactNode;
}

const MainLayout = ({ children }: IMainLayoutProps) => {
    return (
        <Box sx={{ backgroundColor: '#232e7c', paddingX: "50px", margin: 0 }}>
            <Header />
            {children}
        </Box>
    );
};

export default MainLayout;
