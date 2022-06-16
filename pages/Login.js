import React from 'react';
import loginstyles from '../styles/Login.module.css';
export default function Login(){

  return(
    <>
      <div className={loginstyles.container}>
             <div className={loginstyles.login_div}>
                   <h1 className={loginstyles.heading}>
                     Sign in to your account</h1>
                  <form>
                        <div className={loginstyles.field}>
                          <label for='lemail'>Email</label><br/>
                          <input type='email' id='lemail'/>
                        </div>
                        <div className={loginstyles.field}>
                          <label for='lpassword'>Password</label><br/>
                          <input type='Password' id='lpassword'/>
                        </div>
                        <div className={loginstyles.checkbox_field}>
                          <input type='checkbox' id='lcheckbox'/>
                          <label for='lcheckbox'>Remember me</label>
                        </div>
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