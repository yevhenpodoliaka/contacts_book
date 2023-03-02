import toast from 'react-hot-toast';
import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';

import { useDispatch, useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/authSelector';
import { registerUser } from '../redux/auth/authOptions';

export default function LoginForm() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isLoggedIn = useSelector(getIsLoggedIn);
  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault()
    e.stopPropagation()
    if (!name || !email || !password) {
      toast.error('all form fields must be filled out');
    }
    dispatch(registerUser({ name, email, password }));
    console.log(name, email, password)
    if (isLoggedIn) {
          setName('');
          setEmail('');
          setPassword('');
    }

  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign Up
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          label="Name"
          name="name"
          value={name}
          autoComplete="name"
          autoFocus
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          label="Email Address"
          name="email"
          value={email}
          autoFocus
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          value={password}
          label="Password"
          type="password"
          onChange={handleChange}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign Up
        </Button>
        <Link component={RouterLink} to="/login" variant="body2">
          {'Do you have an account? Sign in'}
        </Link>
      </Box>
    </Box>
  );
}
