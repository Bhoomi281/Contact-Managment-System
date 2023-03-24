import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom'
import SingUp from './pages/authentication/signup';
import Login from './pages/authentication/login';
import TotalContacts from './pages/totalContacts/totalContacts';
import Auth from './pages/authentication/auth';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Auth />} />
          <Route path='/signup' element={<SingUp />} />
          <Route path='/contacts' element={<TotalContacts />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
