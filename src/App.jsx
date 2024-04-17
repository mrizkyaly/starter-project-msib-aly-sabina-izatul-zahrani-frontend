import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './components/Template';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route exact path="/register" element={<Register/>} />
        <Route exact path="/profile" element={<Profile/>} />
      </Routes>
    </Router> 
  )
}

export default App
