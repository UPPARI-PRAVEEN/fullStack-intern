import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Dashboard from './components/Dashboard';
import { getToken } from './utils';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const isLoggedIn = !!getToken();
  console.log(isLoggedIn,"$$$")


  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <LoginForm />} />
      </Routes>
    </Router>
  );
};

export default App;

