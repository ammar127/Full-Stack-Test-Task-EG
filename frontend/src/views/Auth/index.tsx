import React from 'react';
import { Form,Formik } from 'formik';

import LoginImg from '../../assets/log.svg';
import RegisterImg from '../../assets/register.svg';
import { LoginDTO } from '../../types';

import { loginValidationSchema } from './auth.schema';
function Auth() {
  const loginInitialValues: LoginDTO = { email: '', password: '' };


  const toggleForm = () => {
    const container: Element | null = document.querySelector(".container");
    if (container?.classList.contains("sign-up-mode")) {
      container?.classList.remove("sign-up-mode");
    } else {
      container?.classList.add("sign-up-mode");
    }
  }

  const onLoginSubmit = (values: LoginDTO) => {
    console.log(values);
  }


  return (

    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <Formik
            initialValues={loginInitialValues}
            validationSchema={loginValidationSchema}
            onSubmit={onLoginSubmit}
          >
            {formik => (
              <Form className="sign-in-form">
                <h2 className="title">Sign In</h2>
                <div className="input-field">
                  <i className="fas fa-user"></i>
                  <input
                    type="email"
                    placeholder="Email"
                    {...formik.getFieldProps('email')}
                  />
                </div>
                {formik.touched.email && formik.errors.email ? (
                  <span className="error">{formik.errors.email}</span>
                ) : null}
                <div className="input-field">
                  <i className="fas fa-lock"></i>
                  <input
                    type="password"
                    placeholder="Password"
                    {...formik.getFieldProps('password')}
                  />
                </div>
                {formik.touched.password && formik.errors.password ? (
                  <span className="error">{formik.errors.password}</span>
                ) : null}
                <input
                  type="submit"
                  value="Login"
                  className="btn solid"
                  disabled={formik.isSubmitting}
                />
              </Form >
            )}
          </Formik>

          <form action="" className="sign-up-form">
            <h2 className="title">Sign Up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Name" />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Sign Up" className="btn solid" />


          </form>
        </div>
      </div>
      <div className="panels-container">

        <div className="panel left-panel">
          <div className="content">
            <h3>New here?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio minus natus est.</p>
            <button className="btn transparent" id="sign-up-btn" onClick={toggleForm}>Sign Up</button>
          </div>
          <img src={LoginImg} className="image" alt="" />
        </div>

        <div className="panel right-panel">
          <div className="content">
            <h3>One of us?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio minus natus est.</p>
            <button className="btn transparent" onClick={toggleForm}>Sign In</button>
          </div>
          <img src={RegisterImg} className="image" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Auth