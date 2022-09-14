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
import {useNavigate} from 'react-router-dom';


import {Link} from 'react-router-dom'
const theme = createTheme();

export default function AddProducts() {
    const [name,setProductName]=useState("");
    const [description,setDescription]=useState("");
    const [price,setPrice]=useState("");
    const [status,setStatus]=useState("");
    const [imgPath,setImgPath]=useState("");

    const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
        let result = await fetch("http://localhost:5000/api/createProduct", {
            method: 'post',
            body: JSON.stringify({ name, description, price,status,imgPath }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        result = await result.json();
        if(result.message)
        {
            console.log(result.message);
        // console.log(result.errors[0].msg);
        alert(result.message)
        }
        else
        {
          console.log(result);
      // console.log(result.errors[0].msg);
       alert('Product is added Successfully')
    //   localStorage.setItem("user", JSON.stringify(result))
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
          {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOpenIcon />
          </Avatar> */}
          <Typography component="h1" variant="h5">
            Add Product
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate >
          <TextField
              margin="normal"
              fullWidth
              id="name"
              label="Product Name"
              name="name"
              required
              autoFocus
              value={name}
              onChange={(e) => setProductName(e.target.value)}
            />
            <TextField
              margin="normal"
              fullWidth
              id="description"
              label="Product Description"
              name="description"
              required
              value={description}
              sx={{ mt: 0, mb: 0 }}
              onChange={(e) => setDescription(e.target.value)}
            />
            <TextField
              margin="normal"
              fullWidth
              name="price"
              label="Product Price"
              id="price"
              required
              value={price}
              sx={{ mt: 1, mb: 0 }} 
              onChange={(e) => setPrice(e.target.value)}
            />
            <TextField
              margin="normal"
              fullWidth
              name="status"
              label="Product Status"
              id="status"
              value={status}
              sx={{ mt: 1, mb: 0 }}
              onChange={(e) => setStatus(e.target.value)}
            />
            <TextField
              margin="normal"
              fullWidth
              name="imgPath"
              label="Product ImgPath"
              id="imgPath"
    
              value={imgPath}
              sx={{ mt: 1, mb: 0 }}
              onChange={(e) => setImgPath(e.target.value)}
            />
            <Button
              type="submit"

              variant="contained"
              sx={{ mt: 1, mb: 0 }}
            >
              Add Product
            </Button>
            
          </Box>
        </Box>
      
      </Container>
    </ThemeProvider>
  );
}
