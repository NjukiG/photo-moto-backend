import React, {useState, useEffect} from 'react';
import '../App.css';
import Home from './Home';

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
    </div>
  );
}

export default App;
