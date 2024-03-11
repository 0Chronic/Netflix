
import './App.css';
import Navbar from './components/Navbar';
import { AuthContextProvider } from './context/AuthContext';
import Account from './pages/Account';
import Home from './pages/Home';
import {Route , Routes} from "react-router-dom"
import Login from './pages/Login';
import Signup from './pages/Signup'
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
      <Navbar></Navbar>

<Routes>
  <Route path='/' element ={<Home />} />
  <Route path='/login' element={<Login />} />
  <Route path='/signup' element={<Signup />} />
  <Route path='/account' element ={<ProtectedRoute><Account /></ProtectedRoute>} />
</Routes>

      </AuthContextProvider>
  
   
    </div>
  );
}

export default App;
