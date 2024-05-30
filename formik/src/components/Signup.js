import React from 'react'
import { useFormik } from 'formik'
import validations from './validations'

function Signup() {
    const { handleSubmit, values, handleChange, errors, touched, handleBlur } = useFormik({
        initialValues: {
          email: "",
          password: "",
          passwordConfirm: ""
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2))
        },

        validationSchema: validations
      })
  return (
    <div>
        <h1>Sing Up</h1>
      <form onSubmit={handleSubmit}>
        
        <label htmlFor="email">Email</label>
        <input onBlur={handleBlur} value={values.email} onChange={handleChange}  name="email" type="email"></input>
        {touched.email && errors.email && <div className='error'>{errors.email}</div>}
        <br />
        <label htmlFor="password">Password</label>
        <input onBlur={handleBlur} value={values.password} onChange={handleChange}  name="password" type="password"></input>
        {touched.password && errors.password && <div className='error'>{errors.password}</div>}
        <br />
        <label htmlFor="passwordConfirm">Confirm Password</label>
        <input onBlur={handleBlur} value={values.passwordConfirm} onChange={handleChange}  name="passwordConfirm" type='password'></input>
        {touched.passwordConfirm && errors.passwordConfirm && <div className='error'>{errors.passwordConfirm}</div>}
        
        <code>{JSON.stringify(values)}</code>
      </form> 
    </div>
  )
}

export default Signup