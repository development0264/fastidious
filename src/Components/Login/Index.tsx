import {
  Box,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router";
import LoginImage from "../../assets/login.png";
import { LoginPanel, LoginWrapper } from "./styled";

const Login = () => {
    const navigate = useNavigate();
    const handleRegister = () => {
      navigate("/register");
    };
    const handleLogin=()=>{
        navigate("/projectManager/dashboard")
    }
  return (
    <LoginWrapper>
      <LoginPanel>
        <Typography
          variant="h4"
          sx={{ fontFamily: "pacifico", color: "text.secondary" }}
        >
          Welcome To Fastidious
        </Typography>
        <Box sx={{ mt: 7 }}>
          <TextField fullWidth label="Email" placeholder="Enter Your Email" />
          <TextField
            sx={{ mt: 7 }}
            fullWidth
            label="Password"
            placeholder="Enter Your Password"
            type="password"
          />
          <Box sx={{ textAlign: "right" }}>
            <Button onClick={handleLogin} variant="contained" sx={{ mt: 7 }}>
              Login
            </Button>
          </Box>
          <Typography sx={{ mt: 2, textAlign: "center" }}>
            New User ?{" "}
            <Typography
              sx={{
                color: "text.secondary",
                cursor: "pointer",
                "&:hover": {
                  color: "text.primary",
                },
              }}
              component="span"
              onClick={handleRegister}
            >
              Create Project Manager Account
            </Typography>
          </Typography>
        </Box>
      </LoginPanel>
      <img
        src={LoginImage}
        style={{ width: "100%", height: "auto", maxWidth: "550px" }}
      />
    </LoginWrapper>
  );
};

export default Login;
