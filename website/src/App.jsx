import FixedBottomNavigation from './components/BottomNav'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Notifications from './pages/Notifications';
import Request from './pages/Request'

function App() {
  return (
<>
    <FixedBottomNavigation/>
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/notifications' element={<Notifications/>}/>
      <Route path='/request' element={<Request/>}/>
    </Routes>

</>
  );
}

export default App;
