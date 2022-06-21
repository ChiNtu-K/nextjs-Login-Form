import React, { useState} from 'react';
import {useForm} from 'react-hook-form';
import loginstyles from '../styles/Login.module.css';
export default function Login(){
  const {register, handleSubmit, formState: { errors }} = useForm();
  const onSubmit = (data) => {
      console.log(data);
  }
  return(
    <>
      <div className={loginstyles.container}>
  
             <div className={loginstyles.login_div}>
                   <h1 className={loginstyles.heading}>
                     Sign in to your account</h1>
                  <form onSubmit={handleSubmit(onSubmit)}>
                        <div className={loginstyles.field}>
                          <label htmlFor='lemail'>Email</label><br/>
                          <input type='email'
                           name="email"
                            id='lemail'
                           {...register("email", {required: "email is required", 
                             pattern:{value:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, 
                              message:"this is not a valid email"}})}
                          />
                        </div>
                        <p className={loginstyles.err}>{errors.email?.message}</p>
                        <div className={loginstyles.field}>
                          <label htmlFor='lpassword'>Password</label><br/>
                          <input type='password'
                           name="password"
                           id='lpassword'
                           {...register("password", {required: "password is required",
                             minLength:{value:"4", message:"password must be more than 4 characters"},
                             maxLength:{value:10, message:"password can't exceed more than 10 characters"}})}
                           />
                        </div>
                        <p className={loginstyles.err}>{errors.password?.message}</p>
                        <div className={loginstyles.checkbox_field}>
                          <input type='checkbox' 
                          name="checkbox"
                           id='lcheckbox'
                           {...register("checkbox", {required: "checkbox is required"})}
                           />
                          <label htmlFor='lcheckbox'>Remember me</label>
                        </div>
                        <p className={loginstyles.err}>{errors.checkbox?.message}</p>
                        <div className={loginstyles.button_field}>
                          <input type='submit' value='Sign in'/>
                        </div>
                  </form>
                  <div className={loginstyles.account_field}>
                  <a href="#" className={loginstyles.account_text}>Create account</a>
                  </div>

                  <div className={loginstyles.footer}>
                    <a href="#">Forgot Password?</a>
                    <a href="#">Go to Trade</a>
                  </div>
              </div>
       </div>
    </>
  )
}