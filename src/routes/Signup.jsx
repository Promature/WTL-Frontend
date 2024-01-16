/* eslint-disable react/no-unescaped-entities */
import loginSVG from '/Fingerprint-rafiki.svg'
import { useFormik } from "formik";
import { Link } from 'react-router-dom';
import * as yup from 'yup'
const schema = yup.object().shape({
  email:yup.string().email("Enter a valid email address").required('This field is required'),
  password:yup.string().min(4,"Must be at least 4 character").max(20,"Must be at most 20 characters").required('Password required'),
  name:yup.string().required('Full Name is required'),
  username:yup.string().required("User Name Required"),
  phone:yup.string().max(10).min(10).required('Phone number required'),
  address:yup.string().required("Please enter address")
})
export default function Signup() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password:"",
      name:"",
      username:"",
      phone:"",
      address:""
    },
    validationSchema:schema,
    onSubmit:values=>{
      console.log(JSON.stringify(values,null,2))
    }
  });
  return (
    <section className='absolute w-fit h-fit m-auto inset-0 shadow-2xl bg-slate-200 rounded-lg'>
      <div className="m-2 relative w-[90vw] flex items-center overflowY-scroll justify-center mx-auto">
        <img className='w-0 md:w-[50%] p-3' src={loginSVG} alt="login svg" />
        <form className=" md:w-[50%] w-full mx-auto border-none md:border-l-2 border-slate-100 flex flex-col pt-[6em] p-7 gap-2 justify-center" onSubmit={formik.handleSubmit}>
          <div className="">
          <label className="block" htmlFor="email">
            Email
          </label>
          <input
            className=" block p-2 rounded-md w-3/4 input input-bordered input-primary"
            type="email"
            name="email"
            id="email"
            value={formik.values.email}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            />
            {formik.touched.email && formik.errors.email?(<div className='text-red-500'>{formik.errors.email}</div>):null}
            </div>
          <div className="">
            <label className="block" htmlFor="password">
              Password
            </label>
            <input
              className="block p-2 rounded-md w-3/4 input input-bordered input-primary invalid:input-error"
              type="password"
              name="password"
              id="password"
              onBlur={formik.handleBlur}
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            {formik.touched.password && formik.errors.password?(<div className='text-red-500'>{formik.errors.password}</div>):null}
          </div>
          <div className="">
            <label className="block" htmlFor="name">
              Full Name
            </label>
            <input
              className="block p-2 rounded-md w-3/4 input input-bordered input-primary invalid:input-error"
              type="text"
              name="name"
              id="name"
              onBlur={formik.handleBlur}
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            {formik.touched.name && formik.errors.name?(<div className='text-red-500'>{formik.errors.name}</div>):null}
          </div>
          <div className="">
            <label className="block" htmlFor="username">
              Username
            </label>
            <input
              className="block p-2 rounded-md w-3/4 input input-bordered input-primary invalid:input-error"
              type="text"
              name="username"
              id="username"
              onBlur={formik.handleBlur}
              value={formik.values.username}
              onChange={formik.handleChange}
            />
            {formik.touched.username && formik.errors.username?(<div className='text-red-500'>{formik.errors.username}</div>):null}
          </div>
          <div className="">
            <label className="block" htmlFor="phone">
              Phone Number
            </label>
            <input
              className="block p-2 rounded-md w-3/4 input input-bordered input-primary invalid:input-error"
              type="text"
              name="phone"
              id="phone"
              onBlur={formik.handleBlur}
              value={formik.values.phone}
              onChange={formik.handleChange}
            />
            {formik.touched.phone && formik.errors.phone?(<div className='text-red-500'>{formik.errors.phone}</div>):null}
          </div>
          <div className="">
            <label className="block" htmlFor="address">
              Address
            </label>
            <textarea 
              className="block p-2 rounded-md w-3/4 textarea textarea-primary textarea-lg"
              type="text"
              name="address"
              id="address"
              onBlur={formik.handleBlur}
              value={formik.values.address}
              onChange={formik.handleChange}
            />
            {formik.touched.address && formik.errors.address?(<div className='text-red-500'>{formik.errors.address}</div>):null}
          </div>
          <button type='submit' className="btn btn-primary mt-2 w-3/4 text-white text-xl font-semibold">Login</button>
          <div className='mt-2'>
            <span>
              Already have an account? 
              <Link to={'/login'} className='text-blue-700 font-semibold hover:text-blue-500'> Log In</Link>
            </span>
          </div>
        </form>
      </div>
    </section>
  );
}
