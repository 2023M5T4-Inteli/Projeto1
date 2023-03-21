import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { useContext } from 'react';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { MyContext } from '../Contextt';

export default function TemporaryDrawer() {
    const anchor = 'right';
    const [state, setState] = React.useState({
        [anchor]: false
    });

    const myContext = useContext(MyContext);
        

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
                    sx={{ position: 'absolute', right: 0, top: 0, padding: 0.5, color:'rgba(0, 0, 0, 1)' }}
                    onClick={toggleDrawer(false)}
                >
                    <CloseIcon sx={{ padding: 0.5, backgroundColor: 'rgba(229, 35, 35, 0.4)', borderRadius: 10 }} />
                </IconButton>

            </Box>
            
            <Divider sx={{ mt: 9,  }} />
            
            {myContext.showCards && (
                <Card sx={{ maxWidth: 300, ml: 2, mt: 3, mr: 2 }}>
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
            )}

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