/* eslint-disable react/no-unescaped-entities */
import loginSVG from '/Fingerprint-rafiki.svg'
import { useFormik } from "formik";
import { Link,useNavigate } from 'react-router-dom';
import * as yup from 'yup'
import instance from '../api/axios';

const schema = yup.object().shape({
  email:yup.string().email("Enter a valid email address").required('This field is required'),
  password:yup.string().min(4,"Must be at least 4 character").max(20,"Must be at most 20 characters").required('Password required')
})
export default function Login() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password:""
    },
    validationSchema:schema,
    onSubmit:values=>{
      instance.post('/login',values,{
        withCredentials:true,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true,
        },
        credentials: 'include'
      }).then(function (response) {
        console.log(response);
        navigate('/home');
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  });
  return (
    <section className='absolute w-fit h-fit m-auto inset-0 shadow-2xl bg-slate-200 rounded-lg'>
      <div className="m-2 relative h-[80vh] w-[90vw] flex items-center justify-center mx-auto">
        <img className='w-0 md:w-[50%] p-3' src={loginSVG} alt="login svg" />
        <form className=" h-full md:w-[50%] w-full items-center mx-auto border-none md:border-l-2 border-slate-100 flex flex-col gap-2 justify-center" onSubmit={formik.handleSubmit}>
          <div className="flex flex-col mx-auto w-fit">
          <label className="block" htmlFor="email">
            Email
          </label>
          <input
            className=" block p-2 rounded-md w-[70dvw] md:w-[20rem] input input-bordered input-primary"
            type="email"
            name="email"
            id="email"
            value={formik.values.email}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            />
            {formik.touched.email && formik.errors.email?(<div className='text-red-500'>{formik.errors.email}</div>):null}
            </div>
          <div className="flex flex-col mx-auto w-fit">
            <label className="block" htmlFor="password">
              Password
            </label>
            <input
              className="block p-2 rounded-md w-[70dvw] md:w-[20rem] input input-bordered input-primary invalid:input-error"
              type="password"
              name="password"
              id="password"
              onBlur={formik.handleBlur}
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            {formik.touched.password && formik.errors.password?(<div className='text-red-500'>{formik.errors.password}</div>):null}
          </div>
          <button type='submit' className="btn btn-primary mt-2 w-[70dvw] rounded-md md:w-[20rem] text-white text-xl font-semibold">Login</button>
          <div className='mt-2'>
            <span>
              Don't have an account yet? 
              <Link to={'/signup'} className='text-blue-700 font-semibold hover:text-blue-500'> Sign Up</Link>
            </span>
          </div>
        </form>
      </div>
    </section>
  );
}
