import FormRow from "../../components/Forms/FormRow";

export default function Login() {
    /**
     * 
     * @param {import("react").FormEvent} e 
     */
    function handleSubmit(e){
        e.preventDefault();
        console.log('Submitted')
    }
  return (
    <div className="p-2 w-max mx-auto border-2 border-slate-100 rounded-lg">
        <form onSubmit={handleSubmit}>
            {/* <label className="block" htmlFor="email">Email</label>
            <input className="block" type="text" name="email" id="email"/> */}
            <FormRow label={'Email'} type={'email'} name={'email'}/>
            <FormRow label={'Password'} type={'password'} name={'password'}/>
            <button className="btn btn-primary">Login</button>
        </form>
    </div>
  )
}
