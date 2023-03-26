import React from "react";
import ComboBox from "../components/SearchBar";
import Navbar from "../components/Navbar/FloatingAction";
import { Box } from "@mui/system";

export default function ViewGroupsClient2Load() {
    return (
        <>

            <Navbar />
            <Box style={{ fontFamily: 'Rubik' }} sx={{ paddingTop: 10, display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                <ComboBox />
                
            </Box>
        </>
    )
}