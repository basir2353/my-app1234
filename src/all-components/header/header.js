import './header.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

export default function Header(){

let dispatch = useDispatch();

  let user = useSelector(function(store){
    return store.userSection.currentUser;
  })

    return <nav>
    <div class="nav-wrapper">
      
      <Link to="/" class="brand-logo">Logo</Link>
       
      {user.id !=undefined &&  <span id='user-box'> Welcome, <img className='user-thumb1' src={user.pic} />  <b>{user.name}</b> </span> }

      <ul id="nav-mobile" class="right hide-on-med-and-down">
        
        {
         user.id ==undefined && 
        <>
          <li><Link to="/login">Login</Link></li>
          <li><Link to='/signup'>Signup</Link></li>
        </>
        
        }
        
        {user.id !=undefined&& <li><Link to='/create-product'>Create Product</Link></li>}
        {user.id !=undefined && <li><Link to='/dashboard'>Dashboard</Link></li>}
        
        {user.id !=undefined && <li><Link to='/users'>Users</Link></li>}
        
        {user.id !=undefined && <li><Link onClick={()=>{
          dispatch({
            type:"LOGOUT_HOGYA"
          })
        }} to='/login'>Logout</Link></li>}

      </ul>
    </div>
  </nav>
  
  }