import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import {Link} from 'react-router-dom'
export default (props)=>{

    let dispatch = useDispatch();

    useEffect(function(){

        axios.get('/abc').then(function(resp){
            setUsers(resp.data) 
            console.log(resp.data);
        })

    }, [])

    // let users = useSelector(function(store){
    //     return store.userSection.users;
    // })

let [users, setUsers] = useState([])

// let users = [];

 return <div>
    <table>
        {
            users.map(function(user, index){
                return <tr>
                    <td>{user.name}</td>
                    <td>{user.password}</td>
                    <td>
                        <button onClick={()=>{
                            
                            // '/user-delete?anc=10&city=fsd'

                            axios.delete('/user-delete?anc='+user.id).then(function(resp){
                                
                            setUsers(users.filter(myUser=>myUser.id != user.id));

                                console.log(resp.data);
                            });

                            // dispatch({
                            //     type:"PERSON_DELETED",
                            //     meraIndex:index

                            // });

                        }}>Delete</button>
                    </td>
                    <td>
                        <Link to={"/signup/"+user.id}>Edit</Link>
                    </td>
                </tr>
            })
        }
    </table>
 </div>

}