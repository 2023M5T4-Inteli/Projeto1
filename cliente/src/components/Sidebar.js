import * as React from 'react';
import { styled, useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Notification1, Notification2 } from '../Notification'

const drawerWidth = 280;
const tema = createTheme({
  palette: {
    primary: {
      main: '#fff',
      // main: '#888EA1',

    },
    secondary: {

      main: '#02DE82',
    },
  },
});
const tema2 = createTheme({
  palette: {
    primary: {
      main: '#888EA1',
      // main: '#0940B4',

    },
    secondary: {

      main: '#02DE82',
    },
  },
});

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    display: 'flex',
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({

  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (

    <Box sx={{ display: 'flex', width: '35px', }}>
      {/* <CssBaseline /> */}
      <ThemeProvider theme={tema}>
        {/* <AppBar position="fixed" open={open}> */}
        <Toolbar sx={{paddingLeft:'5px', 
          minHeight: "32px", width:'2px',
          '@media (min-width: 600px)': {
            minHeight: "32px"
          },
        }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ ...(open && { display: 'none' }), display: 'flex', }}
          >
            <NotificationsIcon sx={{ color: 'white' }} />
          </IconButton>
          {/* <Typography variant="h6" noWrap component="div">
            Client
          </Typography> */}
        </Toolbar>
        {/* </AppBar> */}
      </ThemeProvider>
      <ThemeProvider theme={tema2}>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <Typography sx={{
              padding: theme.spacing(0, 15), color: '#737373'
            }}>
              Notificações
            </Typography>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>

          </DrawerHeader>


          <Divider />
          <Notification1 />
          <Notification2 />

          {/* <List>
          {['Início',  'Solicitação'].map((text, index) => (
            <ListItem key={text} disablePadding component={Link} to={"/" + text}>
              <ListItemButton>
                <ListItemIcon>
                {index === 0 && <AccountCircleIcon/>}
                {index === 1 && <AssignmentIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
          {/* <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}

          {/* <Main open={open}> */}
          {/* <DrawerHeader /> */}
          {/* <Typography paragraph>

        </Typography> */}
          {/* <Typography paragraph>

        </Typography> */}
          {/* </Main> */}
        </Drawer>
      </ThemeProvider>
    </Box>

  );
}