import { ThemeProvider } from '@mui/material';
import Login from './Components/Login/Index';
import theme from './theme';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Registration from './Components/Registration';
import PMDashboard from './Components/PMDashboard';
import Project from './Components/Project/Project';
import Developer from './Components/Developer';
import DevDashboard from './Components/DevDashboard';
import Issues from './Components/Issues';

function App() {
  return (

    <ThemeProvider theme={theme}>
      <Router>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/register' element={<Registration/>} />
        <Route path='/projectManager/dashboard' element={<PMDashboard/>} />
        <Route path='/developer/dashboard' element={<DevDashboard/>} />
        <Route path='/developer/issues' element={<Issues/>} />
        <Route path='/projectManager/developer' element={<Developer/>} />
        <Route path='/projectManager/project' element={<Project/>} />
      </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
