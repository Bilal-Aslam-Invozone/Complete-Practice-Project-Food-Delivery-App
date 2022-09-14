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

export default function UpdateProducts() {
  const [id, setProductID] = useState("");
  const [name, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("");
  const [imgPath, setImgPath] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    let result = await fetch(`http://localhost:5000/api/updateProduct/${id}`, {
      method: "put",
      body: JSON.stringify({ name, description, price, status, imgPath }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    result = await result.json();
    if (result) {
      console.log(result);
      if (result[0] === 1) {
        alert("Product is updated Successfully");
        navigate('/')
      } else {
        alert(`Provide Product_id for updation`);
      }
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
            Update Product
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
            <Button type="submit" variant="contained" sx={{ mt: 1, mb: 0 }}>
              Update Product
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
