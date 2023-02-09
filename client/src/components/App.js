import React, {useState, useEffect} from 'react';
import '../App.css';
import Home from './Home';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';

function App() {

  const [user, setUser] = useState(null)

  useEffect(()=> {
    fetch("/me")
    .then(res => {
      if(res.ok){
        res.json()
        .then(user => setUser(user))
      }
    })
  }, [])
  
  return (
    <div className="App">
      <Home user={user} />
      <SignupForm setUser={setUser}/>
      <LoginForm setUser={setUser} /> 
    </div>
  );
}

export default App;
