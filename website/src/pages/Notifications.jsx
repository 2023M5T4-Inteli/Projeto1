import FixedBottomNavigation from '../components/BottomNav'
import { Notification1, Notification2 } from '../components/NotCards';
import { Grid } from '@mui/material';

function Notifications() {
  return (
<>
{/* <Grid sx={{backgroundColor:'#06266A', height:'40rem', paddingTop:1}}> */}
<Notification1/>
<Notification2/>
{/* </Grid> */}
</>
  );
}

export default Notifications;
