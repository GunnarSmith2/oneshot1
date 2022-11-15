import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
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
       <Grid container style={{ minHeight: "100vh" }}>
        <CssBaseline />
        <Box
          sx={{
            margin: 'auto',
            display: 'flex',
            flexDirection: "column",
            alignItems: 'center',
            justifyContent: 'center',
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
            Sign Up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  sx={{
                    backgroundColor: "white",
                    Border: 1,
                    borderColor: "text.primary",
                    borderRadius: "10px",
                    color: "text.primary",
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  sx={{
                    backgroundColor: "white",
                    Border: 1,
                    borderColor: "text.primary",
                    borderRadius: "10px",
                    color: "text.primary",
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  sx={{
                    backgroundColor: "white",
                    Border: 1,
                    borderColor: "text.primary",
                    borderRadius: "10px",
                    color: "text.primary",
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  sx={{
                    backgroundColor: "white",
                    Border: 1,
                    borderColor: "text.primary",
                    borderRadius: "10px",
                    color: "text.primary",
                  }}
                />
              </Grid>
              <Grid item xs={12}>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
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