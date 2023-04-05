import { useEffect, useState } from 'react';
import {useForm} from 'react-hook-form';
import NotificationManager from 'react-notifications/lib/NotificationManager';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function SaveProdcut(props){

    let dispatch = useDispatch();
    let {register, handleSubmit,reset} =  useForm();

    let user = useSelector(function(store){
      return store.userSection.currentUser;
    })
  
    function saveProdcut(meraData){


      meraData.userKiId = user.id;
      
        meraData.picture = URL.createObjectURL(meraData.picture[
            0]) ;

        dispatch({
        type:"ADD_PRODUCT",
          payload:meraData
        })


    }
  
    return <div>
      <form onSubmit={handleSubmit(saveProdcut)}>
        <input name="title" {...register('title')}  />
        <input name='price'  {...register('price')}  />
        <input type="file" name='picture'  {...register('picture')}  />
        <button>Save Product</button>
      </form>
   
    </div>
  
  }