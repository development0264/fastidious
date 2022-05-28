import { Box, styled } from "@mui/material";

export const RegisterWrapper = styled(Box)(({theme})=>({
    width: "100%",
    height: "100vh",
    position:'relative',
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    '&:before':{
      content: '"Register"',
      position: 'absolute',
      fontFamily:'pacifico',
      fontSize:'3.5rem',
      color:'#fff',
      width: '40vh',
      height: '40vh',
      background: theme.palette.primary.main,
      top: '7%',
      right: '3.5%',
      padding:'20px',
      textAlign:'center',
      transform:'translate(0%,-12%) rotate(20deg)',
      zIndex: -1,
      borderRadius:'100%'
    },
  }));