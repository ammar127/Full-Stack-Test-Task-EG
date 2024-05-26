import React from 'react';
import { Form, Formik, FormikHelpers } from 'formik';

import LoginImg from '../../assets/log.svg';
import RegisterImg from '../../assets/register.svg';
import { loginRequest, registerRequest } from '../../redux/auth/slice';
import { useAppDispatch } from '../../redux/hooks';
import { LoginDTO, RegisterDTO } from '../../types';

import { loginValidationSchema, registerValidationSchema } from './auth.schema';
function Auth() {

  const dispatch = useAppDispatch();


  const loginInitialValues: LoginDTO = { email: '', password: '' };
  const registerInitialValues: RegisterDTO = { name: '', email: '', password: '' };


  const toggleForm = () => {
    const container: Element | null = document.querySelector(".container");
    if (container?.classList.contains("sign-up-mode")) {
      container?.classList.remove("sign-up-mode");
    } else {
      container?.classList.add("sign-up-mode");
    }
  }

  const onLoginSubmit = (values: LoginDTO, { setSubmitting }: FormikHelpers<LoginDTO>) => {
    console.log("🚀 ~ onLoginSubmit ~ values:", values)
    dispatch(loginRequest(values));
    setSubmitting(false);
  }

  const onRegisterSubmit = (values: RegisterDTO, { setSubmitting }: FormikHelpers<RegisterDTO>) => {
    dispatch(registerRequest(values));
    setSubmitting(false);
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
          <Formik
            initialValues={registerInitialValues}
            validationSchema={registerValidationSchema}
            onSubmit={onRegisterSubmit}
          >
            {formik => (
              <Form className="sign-up-form">
                <h2 className="title">Sign Up</h2>
                <div className="input-field">
                  <i className="fas fa-user"></i>
                  <input
                    type="text"
                    placeholder="Name"
                    {...formik.getFieldProps('name')}
                  />
                </div>
                {formik.touched.name && formik.errors.name ? (
                  <span className="error">{formik.errors.name}</span>
                ) : null}
                <div className="input-field">
                  <i className="fas fa-envelope"></i>
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
                  value="Sign Up"
                  className="btn solid"
                  disabled={formik.isSubmitting}
                />
              </Form>
            )}
          </Formik>

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