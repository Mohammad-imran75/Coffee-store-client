import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const SignIn = () => {
    const {signInUser} = useContext(AuthContext)
    const haldleSignInUser = e =>{
        e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    console.log(email, password);
    signInUser(email,password)
    .then(result=>{
        console.log(result.user)
        const  user = {
            email,
            lastLoggedAt: result.user?.metadata?.lastSignInTime
            
        }
        fetch('http://localhost:5000/users',{
            method:'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        }).then(res=>res.json())
        .then(result=>console.log(result))
    })
    .catch(error=>console.error(error.message))
    }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign in now!</h1>
         
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={haldleSignInUser} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button  className="btn btn-primary">Sign In</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
