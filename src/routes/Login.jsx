import loginSVG from '/Fingerprint-rafiki.svg'
import { useFormik } from "formik";
import * as yup from 'yup'
const schema = yup.object().shape({
  email:yup.string().email("Enter a valid email address").required('This field is required'),
  password:yup.string().min(4,"Must be at least 4 character").max(20,"Must be at most 20 characters").required('Password required')
})
export default function Login() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password:""
    },
    validationSchema:schema,
    onSubmit:values=>{
      console.log(JSON.stringify(values,null,2))
    }
  });
  return (
    <section className='absolute w-fit h-fit m-auto inset-0 shadow-2xl bg-slate-900 rounded-lg'>
      <div className="m-2 relative h-[80vh] w-[90vw] flex items-center justify-center mx-auto">
        <img className='w-0 md:w-[50%] p-3' src={loginSVG} alt="login svg" />
        <form className=" h-full md:w-[50%] w-full mx-auto border-none md:border-l-2 border-slate-100 flex flex-col pl-7 gap-2 justify-center" onSubmit={formik.handleSubmit}>
          <div className="p-2">
          <label className="block" htmlFor="email">
            Email
          </label>
          <input
            className=" block p-2 rounded-md w-3/4"
            type="email"
            name="email"
            id="email"
            value={formik.values.email}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            />
            {formik.touched.email && formik.errors.email?(<>{formik.errors.email}</>):null}
            </div>
          <div className="p-2">
            <label className="block" htmlFor="password">
              Password
            </label>
            <input
              className="block p-2 rounded-md w-3/4"
              type="password"
              name="password"
              id="password"
              onBlur={formik.handleBlur}
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            {formik.touched.password && formik.errors.password?(<>{formik.errors.password}</>):null}
          </div>
          <button type='submit' className="btn btn-primary ml-2 mt-2 w-3/5 ">Login</button>
        </form>
      </div>
    </section>
  );
}
