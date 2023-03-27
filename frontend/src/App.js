import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SignUp from './pages/authentication/signup';
import Auth from './pages/authentication/auth';
import ContactPages from './pages/totalContacts/ContactPages';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Auth />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/contactPages' element={<ContactPages />} />
        </Routes>
      </Router>
    </div>
  );
    }
