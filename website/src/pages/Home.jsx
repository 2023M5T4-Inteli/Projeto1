import FixedBottomNavigation from '../components/BottomNav'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { Typography, Grid } from '@mui/material';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';

function Home() {
    return (
        <>

            <Card sx={{ maxWidth: 2000, marginTop: 3, marginRight: 2, marginLeft: 2 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Word of the Day
                    </Typography>

                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        adjective
                    </Typography>
                    <Typography variant="body2">
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
                <CardActions sx={{justifyContent:'space-between'}}>
                    <Button variant="outlined" startIcon={<DeleteIcon />}>
                        Mais
                    </Button>
                    <Button variant="contained" endIcon={<SendIcon />}>
                        Indenização
                    </Button>

                </CardActions>
            </Card>

        </>
    );
}

export default Home;
