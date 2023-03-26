import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './pages/authentication/login';
// import TotalContacts from './pages/totalContacts/totalContacts';
import SingUp from './pages/authentication/signup';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<SingUp />} />
          {/* <Route path='/contacts' element={<TotalContacts />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
