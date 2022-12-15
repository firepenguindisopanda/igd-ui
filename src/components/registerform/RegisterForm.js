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
  const onChangeUsername = (e) => {
    const username = sanitizeInput(e.target.value);
    setUsername(username);
  };
  const onChangeEmail = (e) => {
    const email = sanitizeInput(e.target.value);
    setEmail(email);
  }
  const onChangePassword = (e) => {
    const password = sanitizeInput(e.target.value);
    setPassword(password);
  }
  const handleRegister = (e) => {
    e.preventDefault();
    setSuccessful(false);
    form.current.validateAll();
    if(checkBtn.current.context._errors.length === 0){
      dispatch(register(username, email, password))
        .then(() => {
          setSuccessful(true);
        })
        .catch(() => {
          setSuccessful(false);
        });
    }
  }


  return (
    <div className='col-md-12'>
      <div className='card card-container'>
        <img
          src='//ssl.gstatic.com/accounts/ui/avatar_2x.png'
          alt='profile-img'
          className='profile-img-card'
        />
      </div>
    </div>
  )
}

export default RegisterForm