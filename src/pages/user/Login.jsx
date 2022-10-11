// import axiosInstance from '../../axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';

export default function Login() {

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    // const data = new FormData(event.currentTarget);

    event.preventDefault();
    // const values = {
    //   username: data.get('username'),
		// 	password: data.get('password'),
    // };

    Cookies.set('access_token', 'JWT_ACCESS_TOKEN')
    Cookies.set('refresh_token', 'JWT_REFRESH_TOKEN')
    navigate("/");
    window.location.reload()

		// axiosInstance
		// 	.post(`token/`, values)
		// 	.then((res) => {
    //     Cookies.set('access_token', res.data.access)
    //     Cookies.set('refresh_token', res.data.refresh)
    //     axiosInstance.defaults.headers['Authorization'] = 
    //       'JWT ' + Cookies.get('access_token');
		// 		navigate("/");
		// 	});
      // make sure to error check
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
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
            Sign In
          </Button>
          <Grid container>
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
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}