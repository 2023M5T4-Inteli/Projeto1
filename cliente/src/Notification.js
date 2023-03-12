import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { Typography, Grid } from '@mui/material';

export const Notification1 = () => {
    return (
        <Card sx={{ maxWidth: 1000, marginRight: 2, marginLeft: 2 }}>
            <CardActionArea>
                <CardContent>
                    <Typography sx={{ fontWeight: '500', fontSize: '15px', color: '#02DE82', margin: '0rem 2rem 0 0' }}>
                        Cobertura: R$1.100
                    </Typography>
                    <Typography sx={{ fontWeight: '500', fontSize: '15px', color: '#666', margin: '0rem 2rem 0 0' }}>
                        Sua solicitação foi aceita
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export const Notification2 = () => {
    return (
        <Card sx={{ maxWidth: 1000, marginTop: 3, marginRight: 2, marginLeft: 2 }}>
            <CardActionArea>
                <CardContent>
                    <Typography sx={{ fontWeight: '600', fontSize: '15px', }}>Furtos e acidentes</Typography>
                    <Typography sx={{ fontWeight: '500', fontSize: '15px', color: '#666', margin: '0rem 2rem 0 0' }}>
                        Você foi aceito no grupo
                    </Typography>

                </CardContent>
            </CardActionArea>
        </Card>
    )
}