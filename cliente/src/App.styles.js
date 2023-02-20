import { Grid, Divider, Paper } from "@mui/material";
import { blue } from "@mui/material/colors";
import { withStyles, withTheme } from "@mui/styles/";
import styled from "styled-components";
import ThemeContext from "./components/Navbar"

export const PaperDividerHeader = withStyles({
    root: {
        
        '@media (max-width: 450px)': {
            width:'115%', 
          }
    }
})(Paper);


export const GridDividerHeader = withStyles({
    root: {
        display: "flex",
        justifyContent: "flex-start",
        padding:"13px",
        background:'#32406C',
        // width:'100%', 
        height:'4rem', position:'fixed',width:'115%', 
        '@media (max-width: 450px)': {
            width:'115%', 
          },
        flexDirection:"row"
    }
})(Grid);

export const PaperDividerForm = withStyles({
    root: {
        
        marginTop: "20px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        width:"15rem",
        alignItems: "center",
        height:"10rem"
    }
})(Paper);
export const Papel = withStyles({
    root: {
        
        display: "flex",
        width:"40rem",
        height:"40rem"
    }
})(Paper);






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

export const Icon = withStyles({
    root: {
        display: "flex",
        justifyContent: "space-around",
    }
})(Grid);

export const Images = withStyles({
    root: {
        marginLeft:'30px',
        marginTop:'10px'
    }
})(Grid);

export const Text = withStyles({
    root: {
        display: "flex",
        justifyContent: "flex-start",
        width:'30rem',
        marginRight:'13rem',
        flexDirection:'column',
        marginTop:'10px',
    }
})(Grid);

export const Style1 = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 450, height: 300,
    
    '@media (max-width: 400px)': {
        width:340
      },
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    paddingTop: 2,
    px: 3,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    pb: 3,
    borderRadius: 3
  };

  export const Style2 = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    height: 590,
    '@media (max-width: 650px)': {
        width: 350,
        },
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: '20px'
  };

  export const ContinueButton = {
    width: '28rem',
    height: '2.4rem',
    marginTop: '10rem',
    justifyContent: 'center',
    background: 'rgba(2, 222, 130, 0.5)',
    textTransform: 'none',
    position:'initial',
    color: 'white',
    padding: '30px',
    '@media (max-width: 500px)': {
        width: '23rem',
        // marginTop: '70%',
        '@media (min-width: 450px)': {
            width: '24rem',
            // marginTop: '30%',
            },
        },'@media (max-width: 400px)': {
            width: '22rem',
             
        },

             '@media (min-height: 500px)': {
                marginTop: '10%',
            }, '@media (min-height: 650px)': {
                marginTop: '50%',
                }, '@media (min-height: 700px)': {
                    marginTop: '80%',
                    },
                 '@media (min-height: 800px)': {
                    // marginTop: '50%'
                    marginTop: '100%'

                    },'@media (min-height: 1000px)': {
                        marginTop: '80%',
                        },
    fontSize: '20px',
    borderRadius: '30px',
    '&:hover': {
      backgroundColor: '#5ad6a2',
  }};

  export const ModelButton = {
    width: '30rem',
    height: '3rem',
    marginTop: '0.5rem',
    justifyContent: 'flex-start',
    background: 'rgba(255, 255, 255, 0.2)',
position:'inherit',
    textTransform: 'none',
    '@media (max-width: 500px)': {
        width: '26rem',
        },
        '@media (max-width: 400px)': {
            width: '22rem',
            },
    // color: '#737373',
    color: 'white',
    padding: '30px',
    borderRadius: '10px',
    '&:hover': {
      backgroundColor: '#FAF9E9',
      border: '1px solid #e2dfb0'
    },

  };

  export const MarcaButton = {
    width: '30rem',
    height: '3rem',
    marginTop: '0.5rem',
    justifyContent: 'flex-start',
    position:'inherit',
    // background: '#FAF9E9',
    background: 'rgba(255, 255, 255, 0.2)',
    color: 'white',
    '@media (max-width: 500px)': {
        width: '26rem',
        }, '@media (max-width: 400px)': {
            width: '22rem',
            },

    textTransform: 'none',
    padding: '30px',
    borderRadius: '10px',
    '&:hover': {
      backgroundColor: '#FAF9E9',
      border: '1px solid #e2dfb0'
    },

  };

  

  