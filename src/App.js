import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopNavbar from './components/TopNavbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideNavbar from './components/SideNavbar';
import Filter from './components/Filter';
import { Provider } from 'react-redux';
import store from './redux/store'
import Dashboard from './Pages/Dashboard'
import Login from './Pages/Login';
import CreateRole from './Pages/CreateRole';
import ListRoles from './Pages/ListRoles';
import UsersRole from './Pages/UsersRole';
import ViewAsset from './Pages/ViewAsset'
import CreateAsset from './Pages/CreateAsset'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
            <Routes>
              <Route path="/" element={<><SideNavbar /> </>} />
              <Route path="/asset" element={<><SideNavbar /><ViewAsset /></>} />
              <Route path="/createasset" element={<><SideNavbar /><CreateAsset /></>} />
              <Route path="/roles" element={<><SideNavbar /> <ListRoles/></>} />
              <Route exact path="/roles/create" element={<><SideNavbar /> <CreateRole /></>} />
              <Route exact path="/roles/users" element={<><SideNavbar /> <UsersRole /></>} />
            </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
