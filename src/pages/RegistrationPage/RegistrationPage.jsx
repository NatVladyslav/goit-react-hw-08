import { Avatar, Box, Container, Typography } from '@mui/material';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import PersonAddTwoToneIcon from '@mui/icons-material/PersonAddTwoTone';

import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import { Toaster } from 'react-hot-toast';

const StyledLink = styled(Link)(() => ({
  textDecoration: 'underline',
  color: '#2196f3',
  fontSize: 14,
  '&:hover': {
    textDecoration: 'underline',
  },
}));

const RegistrationPage = () => {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <PersonAddTwoToneIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <RegisterForm />
        <StyledLink to="/login">I already have an account</StyledLink>
      </Box>
      <Toaster />
    </Container>
  );
};

export default RegistrationPage;
