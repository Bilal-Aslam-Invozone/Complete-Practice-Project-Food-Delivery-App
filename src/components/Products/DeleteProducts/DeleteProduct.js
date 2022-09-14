import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const theme = createTheme();

export default function DeleteProduct() {
  const [id, setProductID] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    let result = await fetch(`http://localhost:5000/api/deleteProduct/${id}`, {
      method: "Delete",
      
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    });

 result = await result.json();
    if (result) {
      console.log(result);
      
      if(result.msg==="Product is deleted !")
      {
        alert(result.msg)
        navigate("/");
      }
      else
      {
        alert(result.msg)
      }
    //   if (result[0].msg) {
    //     alert("Product is updated Successfully");
    //   } else {
    //     alert(`Provide Product_id for updation`);
    //   }
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Delete Product
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate>
            <TextField
              margin="normal"
              fullWidth
              id="id"
              label="Product ID"
              name="id"
              required
              autoFocus
              value={id}
              onChange={(e) => setProductID(e.target.value)}
            />
            
            <Button type="submit" variant="contained" sx={{ mt: 1, mb: 0 }}>
              Delete Product
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
