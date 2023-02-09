import React from 'react'

function Home({user}) {
    if(user){
        return <h1>Hello {user}. Welcome back to PhotoMoto. Upload and browse your photos and memories here!</h1>
    }else{
        return <h1>Hello new user. Kindly signup or login to get the full experience of this app!</h1>
    }
}

export default Home