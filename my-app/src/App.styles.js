import { Grid, Divider, Paper } from "@mui/material";
import { blue } from "@mui/material/colors";
import { withStyles, withTheme } from "@mui/styles/";
import styled from "styled-components";
import ThemeContext from "./components/Navbar"

export const GridTitle = withStyles({
    root: {
        display: "inline-flex",
        justifyContent: "space-between",
        margin: "16px 0 16px 16px",
        "& svg": {
            fill: blue,
            fontSize: "22px"
        }
    },
    "& h1": {
        font: "normal normal bold 18px/22px Moderat, Arial",
        letterSpacing: "0px",
        colors: "grey",
        opacity: 1,
        marginLeft: "8px",
    }

})(Grid);

export const PaperDividerHeader = withStyles({
    root: {
        
    }
})(Paper);

export const PaperDividerForm = withStyles({
    root: {
        marginTop: "20px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        width:"15rem",
        alignItems: "center",
        height:"20rem"
    }
})(Paper);


export const GridDividerHeader = withStyles({
    root: {
        display: "flex",
        justifyContent: "space-around",
        padding:"20px",

    }
})(Grid);



export const DividerHeader = withStyles({
    root: {
        backgroundColor: "grey",
        border: `1px solid "grey"`,
        opacity: 1,
        margin: "0 16px 16px",

    }
})(Divider);

export const SpanIconTitle = styled.span`
    display:flex;
    flex-direction: row;
    align-items: center;
`;