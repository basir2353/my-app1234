import './login.css';
import { useState } from 'react';
import {useForm} from 'react-hook-form'
import {NotificationManager} from 'react-notifications'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
export default function Login(){

  let someNavigate = useNavigate();
  let dispatch = useDispatch();


  let [passwordShow, setPasswordShow] = useState(false);

  let {register, handleSubmit} = useForm();

  let users = useSelector(function(store){
  return store.userSection.users;
  })
  

  function userSaveKaro(meraData){
    
 

    console.log(meraData);

  }

    return <main>
    <center>
      <img
        className="responsive-img"
        style={{ width: 250 }}
        src="https://i.imgur.com/ax0NCsK.gif"
      />
      <div className="section" />
      <h5 className="indigo-text">Please, login into your account</h5>
      <div className="section" />
      <div className="container">
        <div
          className="z-depth-1 grey lighten-4 row"
          style={{
            display: "inline-block",
            padding: "32px 48px 0px 48px",
            border: "1px solid #EEE"
          }}
        >
          <form onSubmit={handleSubmit(async function(sineData){


              let abc = await axios.post('/login',  sineData)

              let resp = abc.data;

            // let userMilgya = users.find(function(user){

            //   if(user.name == sineData.name && user.password == sineData.password){
            //     return true;
            //   }

            // }); 

            if(resp){

              localStorage.setItem('meraToken', resp.myToken);

              dispatch({
                type:"LOGIN_HOGYA",
                payload:resp.userMilgya
              });
              someNavigate("/dashboard" );

              NotificationManager.success("loginw hogya wa")
            }else{
              NotificationManager.error("user koi nahi")
            }

            console.log(sineData)

          })} className="col s12" method="post">
            <div className="row">
              <div className="col s12"></div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  {...register('name')}
                  className="validate"
                  type="text"                  
                  id="name"
                />
                <label htmlFor="email">Enter your email</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  className="validate"
                  type={ passwordShow == true ? "text" : "password"}
                  {...register('password')}
                  id="password"
                />
                <img onClick={function(){

                  setPasswordShow( !passwordShow )

                }} className='p-icon' src={passwordShow == false ? "show.png" : 'hide.png'} />

                <label htmlFor="password">Enter your password</label>
              </div>
              <label style={{ float: "right" }}>
                <a className="pink-text" href="#!">
                  <b>Forgot Password?</b>
                </a>
              </label>
            </div>           
            <br />
            <center>
              <div className="row">
                <button
                  type="submit"
                  name="btn_login"
                  className="col s12 btn btn-large waves-effect indigo"
                >
                  Login
                </button>
              </div>
            </center>
          </form>
        </div>
      </div>
      <a href="#!">Create account</a>
    </center>
    <div className="section" />
    <div className="section" />
  </main>
  

}