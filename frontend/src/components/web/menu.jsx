import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  IconButton,
  Icon,
  Menu,
  MenuItem,
  Typography,
  Button
} from '@mui/material';
import useAuth from '/src/hooks/useAuth';
import useModal from '/src/hooks/useModal';
import ticketForm from '../global/tickets/ticketForm';

import logoImg from '/src/logo-grey.png';

const WebMenu = () => {

  const navigate = useNavigate();
  const openCustomModal = useModal();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const { isAdmin, isSupport, isMaintenance, isLogged } = useAuth();
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const goPanel = () => {
    navigate('/panel/')
  };

  const goAdmin = () => {
    window.location.href = '/admin/'
  };

  const modalTicket = () => {
    openCustomModal(ticketForm)
  };

  const pages = [
    { name: 'Panel', click: goPanel, access: isSupport || isMaintenance, icon: 'analytics' },
    { name: 'Tickets', click: modalTicket, access: isLogged, icon: 'note_add' },
    { name: 'Admin', click: goAdmin, access: isAdmin, icon: 'admin_panel_settings' }
  ];

  return (
    <>
      <Box
        component="img"
        sx={{ mr: 2, height: 50, display: { xs: 'none', md: 'flex' } }}
        alt="BikeRider"
        src={logoImg}
        draggable="false"
      />
      <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <Icon>menu</Icon>
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: 'block', md: 'none' }
          }}
        >
          {pages.map((page) => page.access && (
            <MenuItem key={page.name} onClick={() => page.click() && handleCloseNavMenu}>
              <Icon sx={{ verticalAlign: 'middle', mr: 1 }}>
                {page.icon}
              </Icon>
              <Typography textAlign="center" color="white">{page.name}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
      <Box sx={{flexGrow: 1}}>
        <Box
          component="img"
          sx={{ height: 50, display: { xs: 'flex', md: 'none' } }}
          alt="BikeRider"
          src={logoImg}
          draggable="false"
        />
      </Box>
      <Box sx={{ flexGrow: 99, display: { xs: 'none', md: 'flex' } }}>
        {pages.map((page) => page.access && (
          <Button
            key={page.name}
            onClick={() => page.click() && handleCloseNavMenu}
            sx={{ my: 2, display: 'block' }}
            color="white"
          >
            <Icon sx={{ verticalAlign: 'middle' }}>
              {page.icon}
            </Icon>
            {page.name}
          </Button>
        ))}
      </Box>
    </>
  )
}

export default WebMenu;
