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
import Quiz from './components/game for user/Quiz';
import Numbergame from './components/game for user/Numbergame';
import Questions from './components/game for admin/Questions';
import AddEdit from './components/game for admin/Add and Edit';
import UsersList from './components/game for admin/UsersList';
import AdminRoute from './router/AdminRoute';


function App() {
const user=useSelector(state=>state.authReducer.user)
  const dispatch=useDispatch()
  useEffect(()=>{
    if(localStorage.getItem("token")){
      dispatch(getcurrent())

    }

  },[])

  return (
    <div className="App">
      <Navbare></Navbare>

      <Routes>
       
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/login" element={<Login></Login>} ></Route>
      <Route path="/signup" element={<Signup></Signup>}></Route>
      <Route path="*" element={<Error404></Error404>}></Route>
      <Route path="/profile"element={<PrivateRoute><Profile></Profile></PrivateRoute>}/>
      <Route path="/quiz" element={<PrivateRoute><Quiz></Quiz></PrivateRoute>}></Route>
      <Route path="/number" element={<PrivateRoute><Numbergame></Numbergame></PrivateRoute>}></Route>
      <Route path="/questions" element={<AdminRoute ><Questions></Questions></AdminRoute>}></Route>
      <Route path="/add_edit" element={<AdminRoute><AddEdit></AddEdit></AdminRoute>}></Route>
      <Route path="/users_list" element={<AdminRoute><UsersList></UsersList></AdminRoute>}></Route>

      </Routes>
    </div>
  );
}

export default App;
