import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'react-notifications/lib/notifications.css';
import Header from './all-components/header/header';
import Home from './all-components/home/home';
import Signup from './all-components/signup/signup';
import NotificationContainer from 'react-notifications/lib/NotificationContainer';
import Login from './all-components/login/login';

import './App.css';
import { useDispatch } from 'react-redux';

import CreateProduct from './all-components/create-product/create-product';

import Users from './all-components/users/user';
import Dashboard from './all-components/dashboard/dashboard';
import { useEffect } from 'react';
import axios from 'axios';

export default ()=>{

  let dispatch = useDispatch();

  useEffect(function(){

    axios.post('/session-check', {token:localStorage.getItem('meraToken')}).then(function(resp){

      if(resp.data){
        dispatch({
          type:"LOGIN_HOGYA",
          payload:resp.data
        });

        console.log(resp.data)
      }

    })


  }, []);

  return <>
    <BrowserRouter>    
    <Header></Header>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/create-product' element={<CreateProduct />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signup/:name" element={<Signup />} />

          <Route path="/users" element={<Users />} />
      </Routes>
    </BrowserRouter>
    <NotificationContainer></NotificationContainer>
  </>

}