import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { LoginPanel } from "../Login/styled";
import RegisterImage from "../../assets/register.png";
import { RegisterWrapper } from "./styled";
import { useNavigate } from "react-router";
const Registration = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/");
  };
  return (
    <RegisterWrapper>
      <img
        src={RegisterImage}
        style={{ width: "100%", height: "auto", maxWidth: "600px" }}
      />
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
            <Button variant="contained" sx={{ mt: 7 }}>
              Register
            </Button>
          </Box>
          <Typography sx={{ mt: 2, textAlign: "center" }}>
            Already Have Account ?{" "}
            <Typography
              sx={{
                color: "text.secondary",
                cursor: "pointer",
                "&:hover": {
                  color: "text.primary",
                },
              }}
              onClick={handleLogin}
              component="span"
            >
              Login here
            </Typography>
          </Typography>
        </Box>
      </LoginPanel>
    </RegisterWrapper>
  );
};

export default Registration;
