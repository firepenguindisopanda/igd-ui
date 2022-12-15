import React, { useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Form from 'react-validation/build/form'
import Input from 'react-validation/build/input'
import CheckButton from 'react-validation/build/button'
import { isEmail } from 'validator'
import { register } from '../../actions/auth'

const required = (value) => {
  if(!value){
    return(
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const verifyEmail = (value) => {
  if(!isEmail(value)){
    return (
      <div className='alert alert-danger' role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const verifyUsername = (value) => {
  if(value.length < 3 || value.length > 20){
    return (
      <div className='alert alert-danger' role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const verifyPassword = (value) => {
  if(value.length < 6 || value.length > 40){
    return (
      <div className='alert alert-danger' role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

const sanitizeInput = (input) => {
  return input.replace(/[^\w]/g, '');
};

const RegisterForm = () => {
  const form = useRef();
  const checkBtn = useRef();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successful, setSuccessful] = useState(false);
  const { message } = useSelector(state => state.message);
  const dispatch = useDispatch();
  return (
    <div>RegisterForm</div>
  )
}

export default RegisterForm