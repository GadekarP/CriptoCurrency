import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import *as  yup from 'yup' 
import {useFormik} from 'formik'
import { useNavigate } from 'react-router-dom'
export default function Register() {
  const navigate = useNavigate()
  const [localData, setlocalData] = useState([])
  const  formik = useFormik({
    initialValues:{
      Firstname:'',
      Lastname:'',
      email:'',
      password:'',
      cpassword:''

    },
    validationSchema:yup.object({ 
      Firstname:yup.string().required('Firstname is required'),
      Lastname:yup.string().required('Lastname is required'),
      email:yup.string().email('Invalid email').required('Email is required'),
      password:yup.string().required('Password is required').min(3,'Password must be at least 6 characters'),
      cpassword:yup.string().required('Confirm Password is required').oneOf([yup.ref('password'),null],'Passwords must match'),
  }),
  onSubmit:values=>{ 
    localStorage.setItem('signupUser',JSON.stringify([...localData,values]))
    navigate('/')

  }
  })
  useEffect(()=>{
    if(localStorage.getItem('signupUser')){
     setlocalData(JSON.parse(localStorage.getItem('signupUser')))
    }
  },[])
  return (
    <><div className="container">
          <div className="row">
            <div className="col-sm-6 offset-sm-3">
              <div className="card">
                <div className="card-header text-center"><h1>Create Account</h1></div>
                <div className="card-body">
                 <form onSubmit={formik.handleSubmit}>
                 <div>
                    <label for="Firstname" className="form-label">First name</label>
                    <input
                      type="text"
                      name="Firstname"
                      id="name"
                      placeholder="Enter your Firstname"
                      className={formik.errors.Firstname && formik.touched.Firstname ? "form-control  is-invalid" : formik.values.Firstname ===""?"form-control ":"form-control  is-valid"} 
                      value={formik.values.Firstname} 
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <div className="valid-feedback">Looks good!</div>
                    <div className="invalid-feedback">{formik.errors.Firstname}</div>
                  </div>

                  <div>
                    <label for="Lastname" className="form-label">Last name</label>
                    <input
                      type="text"
                      name="Lastname"
                      id="name"
                      placeholder="Enter your Lastname"
                      className={formik.errors.Lastname && formik.touched.Lastname ? "form-control is-invalid" : formik.values.Lastname ===""?"form-control ":"form-control is-valid"} 
                      value={formik.values.Lastname} 
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <div className="valid-feedback">Looks good!</div>
                    <div className="invalid-feedback">{formik.errors.Lastname}</div>
                  </div>
                  <div className="mt-2">
                    <label for="email" className="form-label">Email</label>
                    <input
                      type="text"
                      id="email"
                      placeholder="Enter Your Email"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={formik.errors.email && formik.touched.email ? "form-control is-invalid" : formik.values.email ===""?"form-control ":"form-control is-valid"}
                    />
                    <div className="valid-feedback">Looks good!</div>
                    <div className="invalid-feedback">Please choose Link username.</div>
                  </div>
                  <div className="mt-2">
                    <label for="password" className="form-label">Password</label>
                    <input
                      type="text"
                      name='password'
                      id="password"
                      placeholder="Enter Your Password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={formik.errors.password && formik.touched.password ? "form-control is-invalid" : formik.values.password ===""?"form-control ":"form-control is-valid"}
                    />
                    <div className="valid-feedback">Looks good!</div>
                    <div className="invalid-feedback">Please choose Link password.</div>
                  </div>
                  <div className="mt-2">
                    <label for="cpassword" className="form-label">Confirm Password</label>
                    <input
                      type="text"
                      name='cpassword'
                      id="cpassword"
                      placeholder="Confirm Your Password"
                      value={formik.values.cpassword}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={formik.errors.cpassword && formik.touched.cpassword ? "form-control is-invalid" : formik.values.cpassword ===""?"form-control ":"form-control is-valid"}
                    />
                    <div className="valid-feedback">Looks good!</div>
                    <div className="invalid-feedback">
                     {formik.errors.cpassword}
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary w-100 mt-3">
                    Signup
                  </button>
                  <p className="text-center mt-3">
                    Already Have Account ?
                 <Link to="/">Login</Link> 
                    
                
                  </p>
                
                 </form>
                </div>
              </div>
            </div>
          </div>
        </div></>
  )
}
