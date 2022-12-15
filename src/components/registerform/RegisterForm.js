import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Form from 'react-validation/build/form'
import Input from 'react-validation/build/input'
import CheckButton from 'react-validation/build/button'
import { isEmail } from 'validator'
import { register } from '../../actions/auth'


const sanitizeInput = (input) => {
  return input.replace(/[^\w]/g, '');
};

const RegisterForm = () => {
  return (
    <div>RegisterForm</div>
  )
}

export default RegisterForm