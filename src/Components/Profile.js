import React, { useContext } from 'react'
import { LoginContext } from '../Contexts/LoginContext'

function Profile() {
    const { username ,pass} =useContext(LoginContext)
    
  return (
    <>
      <h1> Profiel</h1>
      <h1> Username: {username} </h1>
      <h1>PassWord : {pass}</h1>
    </>
  )
}

export default Profile
