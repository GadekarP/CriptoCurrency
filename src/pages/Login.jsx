import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'                                     
export default function Login() {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string('Invalid email address').required('Required'),
      password: Yup.string().required('Required')
    }),
    onSubmit: values => {
      let localData = JSON.parse(localStorage.getItem('signupUser'))
      if (localData) {
        if (localData[0].email === values.email && localData[0].password === values.password) {
          navigate('/')
        }else {
        alert('Data not found , please register first')
      }

    }
    }
  })
  
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 offset-sm-3">
            <div className="card">
              <div className="card-header text-center"><h3>Login</h3></div>
              <div className="card-body">
                <form onSubmit={formik.handleSubmit}>
                  <div>
                    <label for="email">First Email</label>
                    <input
                      type="text"
                      name='email'
                      placeholder="Enter Your Email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={
                        formik.errors.email && formik.touched.email
                          ? "form-control is-invalid"
                          : formik.values.email === ""
                            ? "form-control "
                            : "form-control is-valid"
                      }
                    />
                    <div className="valid-feedback">Looks good!</div>
                    <div className="invalid-feedback">{formik.errors.email}</div>
                  </div>
                  <div className="mt-2">
                    <label for="password" className="form-label">Password</label>
                    <input
                      type="password"
                      name='password'
                      placeholder="Enter Your Password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={
                        formik.errors.password && formik.touched.password
                          ? "form-control is-invalid"
                          : formik.values.password === ""
                            ? "form-control "
                            : "form-control is-valid"
                      }
                    />
                    <div className="valid-feedback">Looks good!</div>
                    <div className="invalid-feedback">{formik.errors.password}</div>
                  </div>
                  <button type="submit" className="btn btn-primary w-100 mt-3">
                    Login
                  </button>
                  <p className="text-center mt-3">
                    Dont Have Account? <Link to="/register">Create Account</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div></>
  )
}
