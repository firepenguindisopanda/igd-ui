//import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.scss';
import React from 'react';
import './App.scss';

function App() {
  return (
    <div className='container-fluid'>
      <div class="jumbotron p-2 text-center">
        <h1 class="display-4">Welcome to Intergalactic Digital</h1>
        <p class="lead">Create Read Update Delete Blogs, Login and Logout. Users will have roles associated to them</p>
        <hr class="my-4" />
        <p>We are going to be able to login and see blogs and then improve as we develope more!</p>
        
        <button type="button" class="btn btn-primary btn-lg rounded-0">Learn more</button>
      </div>
    </div>
  );
}

export default App;
