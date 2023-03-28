import './App.css';
import Login from './components/authentication/login'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from './components/authentication/signup';
import Table from './components/tableui/table';
import Auth from './components/authentication/auth';
function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/register" element={<SignUp/>}/>
          <Route path="/contacts" element={<Auth Child={Table} />}/>
          {/* <Route path="/contacts" element={<Table />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

