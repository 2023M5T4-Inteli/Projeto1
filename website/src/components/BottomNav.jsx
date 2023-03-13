import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import { Outlet, Link, useNavigate } from "react-router-dom";
import Avatar from '@mui/material/Avatar';


export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);
  const navigate = useNavigate()

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
      <Paper sx={{ position: 'fixed', top: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={{height:'60px', 
            "& .Mui-selected, .Mui-selected > svg": {
                color: "#02DE82"
            }
        }}
        >
          <BottomNavigationAction  value="notifications" label="Recents" onClick={() => navigate('/notifications')} icon={<RestoreIcon />}/>
          <BottomNavigationAction   value='home' label="Favorites" onClick={()=> navigate('/home')} icon={<FavoriteIcon />}/>
          <BottomNavigationAction  value='default' label="Archive" onClick={()=> navigate('/')} icon={<ArchiveIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}