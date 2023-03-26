import FixedBottomNavigation from '../components/BottomNav'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { Typography, Grid } from '@mui/material';

function Home() {
  return (
<>

        <Card sx={{ maxWidth: 2000, marginTop: 3, marginRight: 2, marginLeft: 2 }}>
            <CardActionArea>
                <CardContent>
                    <Typography sx={{ fontWeight: '500', fontSize: '15px', color: '#06266A', margin: '0rem 2rem 0 0' }}>
                        Grupo ...
                    </Typography>
                    <hr/>
                    <Typography sx={{ fontWeight: '500', fontSize: '15px', color: '#666', margin: '0rem 2rem 0 0' }}>
                        Dados relacionados
                    </Typography>
                    <hr/>
                </CardContent>
            </CardActionArea>
        </Card>
    
</>
  );
}

export default Home;
