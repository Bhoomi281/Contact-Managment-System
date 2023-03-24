import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom'
import SingUp from './pages/authentication/signup';
import Login from './pages/authentication/login';
import Delete from './pages/delete/delete';
import Import from './pages/import/import';
import Search from './pages/search/search';
import Tooltip from './pages/tooltip/tooltip';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<SingUp />} />
          <Route path='/contact' element={<Delete />} />
          <Route path='/cotanct' element={<Import />} />
          <Route path='/contact' element={<Search />} />
          <Route path='/contact' element={<Tooltip />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
