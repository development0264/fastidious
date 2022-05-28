import { createTheme } from "@mui/material";

const theme = createTheme({
    palette:{
        text:{
            primary:"#000111",
            secondary:"#454DCA"
        },
        primary:{
            main:'#454DCA',
            light:'#454DCA',
            dark:'#454DCA',
        }
    },
    typography:{
        allVariants:{
            fontFamily:"poppins"
        },
        
    },
    components:{
        MuiPaper:{
            styleOverrides:{
                rounded:{
                    boxShadow:'0 0 2px #111',
                    padding:'50px 30px',
                    borderRadius:'20px',
                    fontFamily:'poppins',
                }
            }
        },
        MuiButton:{
            styleOverrides:{
                root:{
                    padding:'10px 40px',
                    borderRadius:'50px'
                }
            }
        },
    }
  });
  export default theme