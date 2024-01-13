import * as React from 'react';
import './DrawerComp.css'
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    marginLeft: 500,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
    <Box  className='drawer'
      sx={{
        ...(open?{width: '250px',height:'800px'}:{ width: '100px',height:'800px' }),
        marginTop:'80px',
        position:'fixed',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-evenly',
        alignItems:'center'
      }}>
      <CssBaseline />
      <Toolbar className='toolbar'>
          <MenuIcon
          className='menu-icon'
          cursor="pointer"
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginTop: 4,
            color: 'white',
            ...(open?{display: 'none'}:{ display: 'flex' })
          }}
          />
          <IconButton onClick={handleDrawerClose}
                    sx={{
                      marginLeft: 20,
                      marginTop: 3,
                      color: 'white',
                      // ...(open && { display: 'flex' } || !open && {display: 'none'}),
                      ...(!open?{display: 'none'}:{ display: 'flex' })
                    }}
          >
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </Toolbar>
        <List
          sx={{
            width:1,
            height:800,
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'center'
          }}
        >
          {['Id', 'Cube', 'Calculator', 'Certificate','Data-List','Graph', 'Chart', 'Shield', 'Calendar', 'Bank'].map((text, index) => (
            <ListItem key={text}         
            sx={{
              display:'flex',
              justifyContent:'center',
              alignItems:'center'
            }}>
              <ListItemButton
                sx={{
                  color: 'white',
                  px: 2.5,
                  width:1,
                  height:50,
                  display:'flex',
                  alignItems:'center',
                  justifyContent: open ? 'space-between' : 'center',
                }}
              >

                <ListItemIcon
                  sx={{
                    display:'flex',
                    flexDirection:'column',
                    justifyContent: 'space-between',
                    alignItems:'center'
                  }}
                >
                  {index === 0 && <img src={require('../../img/icons/id.png')}/>}
                  {index === 1 && <img src={require('../../img/icons/cube.png')}/>}
                  {index === 2 && <img src={require('../../img/icons/calculator.png')}/>}
                  {index === 3 && <img src={require('../../img/icons/certificate.png')}/>}
                  {index === 4 && <img src={require('../../img/icons/datalist.png')}/>}
                  {index === 5 && <img src={require('../../img/icons/graph.png')}/>}
                  {index === 6 && <img src={require('../../img/icons/chart.png')}/>}
                  {index === 7 && <img src={require('../../img/icons/shield.png')}/>}
                  {index === 8 && <img src={require('../../img/icons/calendar.png')}/>}
                  {index === 9 && <img src={require('../../img/icons/bank.png')}/>}

                </ListItemIcon>

                {open?<ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />:''}
              </ListItemButton>
            </ListItem>
          ))}
          
        </List>
    </Box>
    </>
  );
}
