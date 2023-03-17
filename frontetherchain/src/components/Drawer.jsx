import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export default function TemporaryDrawer() {
    const anchor = 'right';
    const [state, setState] = React.useState({
        [anchor]: false
    });

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = () => (
        <Box
            sx={{ width: 300 }}
            role="presentation"
            onKeyDown={toggleDrawer(false)}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    '& > :not(style)': {
                        m: 2,
                        borderRadius: 10,
                        // backgroundColor: 'rgba(2, 222, 130, 0.4)',
                    },
                }}
            >

                <IconButton
                    sx={{ position: 'absolute', right: 0, top: 8, padding: 0.5, }}
                    onClick={toggleDrawer(false)}
                >
                    <CloseIcon sx={{ padding: 0.5, backgroundColor: 'rgba(229, 35, 35, 0.4)', borderRadius: 10 }} />
                </IconButton>

            </Box>
            <Divider sx={{mt:1, }}/>

            <Card sx={{ maxWidth: 300, ml:2, mt:3, mr:2}}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Você foi aceito no grupo...
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            <Card sx={{ maxWidth: 300, ml:2, mt:3, mr:2}}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Você foi aceito no grupo...
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            <Card sx={{ maxWidth: 300, ml:2, mt:3, mr:2}}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Você foi aceito no grupo...
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            
        </Box>
    );

    return (
        <div>
            <Button onClick={toggleDrawer(true)} style={{ position: 'absolute', right: 0, top: 0, zIndex: 1, height: '40px' }} />
            <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(false)}
            >
                {list()}
            </Drawer>
        </div>
    );
}