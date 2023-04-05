import axios from 'axios';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import {useForm} from 'react-hook-form';
import NotificationManager from 'react-notifications/lib/NotificationManager';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {v4} from 'uuid';

export default function Signup(props){

    let params = useParams();
    const [user, setUser] = useState(null);
    // let [userKaIndex, setUserIndex] = useState(-1);

  // let users = useSelector(function(store){
  //   return store.userSection.users;
  // })

  useEffect(function(){

    axios.get('/user-lao?id='+params.name).then(function(resp){
      setUser(resp.data)
    })

    // let userMilgya  =users.find(user=>user.name == params.name)

    // if(userMilgya){
      
    //   let userKaIndex = users.indexOf(userMilgya);
    //   // setUserIndex(userKaIndex);
    //   setUser(userMilgya)


    // }

  }, [])

  useEffect(() => {

    if(params.name){
      reset(user);
    }
    
}, [user]);

    // alert(params.name)

    let dispatch = useDispatch();

    let {register, handleSubmit,reset} =  useForm();
  
    function saveUser(meraData){

      if(params.name){

        axios.put('/user-update',meraData ).then(function(resp){
          console.log(resp.data);
        }).catch(function(resp){
          console.log(resp);
        })

        // dispatch({
        //   // meraIndex:userKaIndex,
        //   type:"PERSON_EDIT",
        //   payload:meraData
        // })

      }else{

        // meraData.id = v4();
  

        let meraForm = new FormData();
        meraForm.append("name",  meraData.name)
        meraForm.append("password",  meraData.password)
        meraForm.append("id",  v4())

        for(let file of meraData.pic){
            meraForm.append("pic",      file)
        }

// 200,sb OK chal raha
// 300, redirection
// 400, 404-not found, 403-authorized nahi h
// 500, server se related

      axios.post('/create-user', meraForm).then(function(resp){
        // resp.data
        NotificationManager.success("Signuped sucessfully!");
      }).catch(function(resp){
        NotificationManager.error(resp.response.data.message)
        console.log(resp.response.data.message);
      })

      //  dispatch({
      //   type:"PERSON_ADD",
      //   payload:meraData
      // })
    }

        // props.abc.push(meraData)

    //   setUsers([...users])
  
      console.log(meraData)
    }
  
    return <div>
      <form onSubmit={handleSubmit(saveUser)}>
        <input name="name" {...register('name')}  />
        <input name='password'  {...register('password')}  />
        <input multiple id="some" type="file"  {...register('pic')}  />
        <button>Submit form</button>
      </form>
      <h1>Signup wala form</h1>
    </div>
  
  }