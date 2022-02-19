import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Navbare from './components/navbar/Navbar';
import Login from './components/login/login';
import Signup from './components/signup/Signup';
import Error404 from './components/error/404error';
import Profile from './components/profile/Profile';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getcurrent } from './redux/actions/authAction';
import PrivateRoute from './router/PrivateRoute';


function App() {
const user=useSelector(state=>state.authReducer.user)
  const dispatch=useDispatch()
  useEffect(()=>{
    if(localStorage.getItem("token")){
      dispatch(getcurrent())

    }

  },[user])

  return (
    <div className="App">
      <Navbare></Navbare>

      <Routes>
       
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/login" element={<Login></Login>} ></Route>
      <Route path="/signup" element={<Signup></Signup>}></Route>
      <Route path="*" element={<Error404></Error404>}></Route>
      <Route path="/profile"element={<PrivateRoute><Profile></Profile></PrivateRoute>}/>
      </Routes>
    </div>
  );
}

export default App;
