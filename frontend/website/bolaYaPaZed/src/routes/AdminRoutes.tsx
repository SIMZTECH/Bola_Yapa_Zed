import {Route,Routes} from 'react-router-dom';
import AdminDashbord from '../pages/admin/AdminDashbord';
import Profile from '../pages/admin/Profile';
import Fixtures from '../pages/admin/Fixtures';
import Settings from '../pages/admin/Settings';
import CreateTeam from '../pages/admin/CreateTeam';
import AddFixture from '../pages/admin/AddFixture';


function MainRoute(){
    return (
        <Routes>
            <Route path='/' element={<AdminDashbord/>} />
            <Route path='/dashbord' element={<AdminDashbord/>} />
            <Route path='/profile/me' element={<Profile/>} />
            <Route path='/fixtures' element={<Fixtures/>} />
            <Route path='/my-account/settings' element={<Settings/>} />
            <Route path='/add/team' element={<CreateTeam/>} />
            <Route path='/fixtures/add-fixture' element={<AddFixture/>} />
        </Routes>
    )
}


export default MainRoute;