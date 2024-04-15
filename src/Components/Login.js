import React, { useContext } from 'react'
import { LoginContext } from '../Contexts/LoginContext';

function Login() {
   
   const {setUsername, setShowProfile,setPass}=useContext(LoginContext);
   

  return (
   <>
   <input type="text" 
   placeholder='Username...'
   onChange={(e) => {
    setUsername(e.target.value);
   }}
   />
   <input type="text" 
   placeholder='Password...'
   onChange={(e)=> {
    setPass(e.target.value);
   }}
   />
   <button onClick={()=>{
    setShowProfile(true)
   }}>
    LOGIN
   </button>
  
   </>
  )
}

export default Login
