import { useState } from 'react';
import ContactsIcon from '@mui/icons-material/Contacts';

import { Box, Button, Divider, Drawer } from '@mui/material';

const Burger = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = newOpen => () => {
    setOpen(newOpen);
  };

  const handleClick = e => {
    if (e.currentTarget !== e.target) setOpen(false);
  };

  return (
    <Box sx={{ display: { sm: '', md: 'none' }, ml: 'auto' }}>
      <Button
        variant="text"
        color="primary"
        aria-label="menu"
        onClick={toggleDrawer(true)}
        sx={{ minWidth: '30px', p: '4px' }}
      >
        <ContactsIcon />
      </Button>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            minWidth: '60dvw',
            p: 2,
            backgroundColor: 'background.paper',
            flexGrow: 1,
          }}
          onClick={handleClick}
        >
          <Divider />
        </Box>
      </Drawer>
    </Box>
  );
};

export default Burger;
