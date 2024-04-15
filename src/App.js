
import { useState } from 'react';
import './App.css';
import Login from './Components/Login';
import Profile from './Components/Profile';
import { LoginContext } from './Contexts/LoginContext';

function App() {
  const [showProfile, setShowProfile]= useState(false);
  const [username, setUsername]=useState("");
  const [pass, setPass] =useState("");
  return (
    <div className="App">
      <LoginContext.Provider value={{username,setUsername, setShowProfile,pass,setPass}}>
      {showProfile ? <Profile/> : <Login/>}
      </LoginContext.Provider>
    </div>
  );
}

export default App;
