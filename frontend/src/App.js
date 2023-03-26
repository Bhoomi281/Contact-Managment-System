import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './pages/authentication/login';
// import TotalContacts from './pages/totalContacts/totalContacts';
import SingUp from './pages/authentication/signup';
import Auth from './pages/authentication/auth';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Auth />} />
          <Route path='/signup' element={<SingUp />} />
          {/* <Route path='/contacts' element={<TotalContacts />} /> */}
          <Route path='contactPages' element={<ContactPages />} />
        </Routes>
      </Router>
    </div>
  );
  }
// import ContactPages from './pages/totalContacts/ContactPages';
// // import Pagination from './Pagination';
// function App(){
// return (
// <div>
// <ContactPages/>
// {/* <Pagination/> */}
// </div>
// );
// }
// export default App