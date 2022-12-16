import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Profile = () => {
    const { user: currentUser } = useSelector((state) => state.auth);
    if(!currentUser){
        return <Navigate to="/login" />
    }
  return (
    <div className='container'>
        <div className='row'>
            <header>
                <h2><strong>{currentUser.username}</strong></h2>
            </header>
        </div>
        <div className='row'>
            <div className='col-md-6 text-center fs-1'>
                <p>
                    <strong>Token: </strong>{currentUser.accessToken.substring(0, 20)} ...{" "}
                    {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
                </p>
            </div>
            <div className='col-md-6 text-center fs-1'>
                <p>
                    <strong>Id: </strong> {currentUser.id}
                </p>
            </div>
        </div>
        <div className='row'>
            <div className='col-md-4 fs-2'>
                <p>
                    <strong>Email: </strong>{currentUser.email}
                </p>
            </div>
            <div className='col-md-8 fs-2'>
                <strong>Authorities:</strong>
                <ul>
                    {
                        
                        currentUser.roles &&
                        currentUser.roles.map((role, index) => 
                        <li key={index}>{role}</li>)
                    }
                </ul>
            </div>
        </div>
    </div>
  );
};

export default Profile