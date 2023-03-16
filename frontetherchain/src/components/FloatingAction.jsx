import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

export default function Navbar() {
    return (
        <>
            <Paper sx={{ borderRadius: 0, backgroundColor: 'rgba(2, 222, 130, 0.1)', position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', '& > :not(style)': { m: 2, borderRadius: 10, backgroundColor:'rgba(2, 222, 130, 0.4)' } }}>
                    <Fab size="small" color="secondary" aria-label="add">
                        <MenuOpenIcon sx={{fill:'black'}}/>
                    </Fab>
                  
                        <Fab sx={{}} size="small" color="secondary" aria-label="add">
                            <Link to={'/notifications'} style={{ textDecoration: 'none', lineHeight:0, fill:'black' }}>
                                <NotificationsNoneIcon sx={{fill:'black'}} />
                            </Link>
                        </Fab>
                  
                </Box>

            </Paper>
        </>
    );
}