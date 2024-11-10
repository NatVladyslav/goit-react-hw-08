import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { selectIsLoggedIn } from '../../redux/auth/selectors';

import Burger from '../Burger/Burger';

import ContactsIcon from '@mui/icons-material/Contacts';
import { Box, Container, AppBar as Header, Toolbar } from '@mui/material';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Header
      position="static"
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        mt: 2,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={toolbarStyles}>
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
            <Link to="/">
              <ContactsIcon color="primary" />
            </Link>
          </Box>
          <Burger isLoggedIn={isLoggedIn} />
        </Toolbar>
      </Container>
    </Header>
  );
};

const toolbarStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50px',
  bgcolor: 'rgba(73, 236, 173, 0.265)',
  maxHeight: 40,
  border: '1px solid',
};
export default AppBar;
