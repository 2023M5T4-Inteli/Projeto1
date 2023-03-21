import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import styled from '@mui/system/styled'
import ApproveDecline from '../components/approve_decline';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import Navbar from '../components/Navbar/FloatingAction';
import BackNavbarReq from '../components/Navbar/BackNavbarReq';


export default function CheckboxList() {

    const [checked, setChecked] = React.useState([0]);

    const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const wallet_List = [
    {
      address:"0x5EaaAb0F75C41A4314FFa90fdadE8e2a33054544",
      label_Adress:"1"
    },
    
    {
      address:"0xFf27a22195b74b06Af498FC5E63f0A3b0F3Ed9Bd",
      label_Adress: "2"
    },

    {
      address:"0xf8094b52b1Bad1361aBC90993EAe757FFc91C5e3",
      label_Adress:"3",
    }
  ];

  const searching_Icon = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: 'grey',
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', padding:'20px 0 0 50px'}}>
    <BackNavbarReq/>
    <br></br>
    <br></br>
    <br></br>

    <div >
      <br>
      </br>
      <Search>
        <SearchIcon />
        <searching_Icon></searching_Icon>
      </Search>
        <h1>Grupo 1</h1>
        <p style={{ fontSize: '20px' }}>Solicitações de entrada no grupo: </p>
    </div>
    <Button variant="contained" onClick={""} style={{ backgroundColor: "rgba(2, 222, 130, 0.1)" }} >
      Aprovar Tudo
    </Button>
    <br></br>
    <br></br>

      {wallet_List.map((wallet, index) => {
        const labelId = `checkbox-list-label-${index}`;
  

        return (
        
        <div alignItems="center" display="flex">
          <ListItem
            key={index}
            secondaryAction={
              <h6>
                  {/* Data de solicitação */}
              </h6>
            }
            disablePadding
          >
            <ListItemButton role={undefined} onClick={handleToggle(index)} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(index) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId}}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary= {wallet.address} 
              
              />
            </ListItemButton>
          </ListItem>
          <ApproveDecline />

        </div>
        );
      })}
    </List>
  );
}