import React, { useState, useRef } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        SmithProductions
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

const Account = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const ref = useRef(null);

   // update state based on form input changes
   const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };

    return (
        <ThemeProvider theme={theme}>
          <div style={{
            backgroundImage: "url(img/background.jpg)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "100%",
            width: "100%",
          }}>
        <Grid container style={{ minHeight: "100vh"}}>
          <CssBaseline />
          <div>
            <h1></h1>
          </div>
          <Box
            sx={{
              margin: "auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: {
                xs: 300, // theme.breakpoints.up('xs')
                sm: 300, // theme.breakpoints.up('sm')
                md: 300, // theme.breakpoints.up('md')
                lg: 400, // theme.breakpoints.up('lg')
                xl: 500, // theme.breakpoints.up('xl')
              }
            }}
          >
            <Typography component="h2" variant="h1"
            sx={{
              color: "#ffffff",
              m: 0, 
            }}
            >
              OneShot
            </Typography>
            <Typography component="h5" variant="h5"
            sx={{
              color: "#ffffff",
              fontSize: "1.2rem",
              m:0,
              mb: 5
            }}
            >
              The Growing World of Esports
            </Typography>
            <Typography component="h1" variant="h5" sx={{
              color: "#ffffff"
            }}>
             Sign In
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1,
                padding: "15px 15px",
              }}
            >
              <TextField
                ref={ref}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                onChange={handleChange}
                value={formState.email}
                autoComplete="email"
                autoFocus
                sx={{
                  backgroundColor: "white",
                  Border: 1,
                  borderColor: "text.primary",
                  borderRadius: "10px",
                  color: "text.primary",
                }}
              />
              <TextField
                ref={ref}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={handleChange}
                value={formState.password}
                autoComplete="current-password"
                sx={{
                  backgroundColor: "white",
                  Border: 1,
                  borderColor: "text.primary",
                  borderRadius: "10px",
                  color: "text.primary",
                }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, borderRadius: "10px" }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2" color="#000000">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2" color="#000000">
                    Don't have an account? {"Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4, color: "#ffffff", position: "absolute", bottom: 3 }} />
          </Box>
        </Grid>
        </div>
      </ThemeProvider>
    );
}

export default Account;
