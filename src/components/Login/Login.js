import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'
const theme = createTheme();

export default function SignUp() {
    const [userType,setUserType]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate();
    useEffect(()=>{
        const auth = localStorage.getItem("Token")
        if(auth)
        {
          navigate('/')
        }
      },[])
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.warn(userType, email, password);
        let result = await fetch("http://localhost:5000/api/loginUser", {
            method: 'post',
            body: JSON.stringify({email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        result = await result.json();
        if(result.msg)
        {
            console.log(result.msg);
        // console.log(result.errors[0].msg);
        alert(result.msg)
        }
        else
        {
          console.log(result);
      // console.log(result.errors[0].msg);
      alert('User is login Successfully',result)
      localStorage.setItem("Token", JSON.stringify(result))
      navigate('/')
        }
        // console.log(result);
        // // console.log(result.errors[0].msg);
        // alert(result.errors[0].msg)
        // // alert(result)
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOpenIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            LogIn
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
              margin="normal"
              fullWidth
              id="userType"
              label="UserType [Admin or Customer]"
              name="userType"
              autoComplete="current-user"
              type={"email"}
              required
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
            />
            <TextField
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
            <Typography variant="body2">
            Sign up free for {"      "}
            <Link to="/signup">FoodDelivery</Link>
        </Typography>
            
            
            {/* <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid> */}
          </Box>
        </Box>
      
      </Container>
    </ThemeProvider>
  );
}