// import PropTypes from 'prop-types';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { Link, useNavigate } from "react-router-dom";
import { FaFacebookF } from 'react-icons/fa';
import { BsGoogle, BsGithub } from 'react-icons/bs';
import authenticationImg from "../../assets/images/others/login.png"
import { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {
  const navigate = useNavigate();
  const {signInUser, googleSignIn} = useContext(AuthContext);
  const [errors, setErrors] = useState(null)
  const [loading, setLoading] = useState(false)
    const [disable, setDisable] = useState(true);

    useEffect(()=>{
        loadCaptchaEnginge(6);     
    },[])

    const handleGoogleSignIn =()=>{
      googleSignIn()
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        Swal.fire({
          title: 'Logged In!',
          text: `${result.user?.displayName ? result.user.displayName : 'User'} Logged In successfully!`,
          imageUrl: result.user?.photoURL ? result.user.photoURL || result.user.photoURL : 'https://i.ibb.co/qnT81gF/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg',
          imageWidth: 200,
          imageHeight: 200,
          imageAlt: "Custom image",
          confirmButtonText: 'Ok!',
        })
        navigate("/dashboard/CreateNewTask");   
        })
    }

    const handleLogin = e =>{
        e.preventDefault();
        setErrors("")
        setLoading(true);
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInUser(email, password)
        .then(result=>{
          console.log("Logged in successfully!", result.user);
          Swal.fire({
            title: 'Logged In!',
            text: `${result.user?.displayName ? result.user.displayName : 'User'} logged in successfully!`,
            imageUrl: result.user?.photoURL ? result.user.photoURL || result.user.photoURL : 'https://i.ibb.co/qnT81gF/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: "Custom image",
            confirmButtonText: 'Ok!',
          })
          setLoading(false)
          navigate('/dashboard/CreateNewTask')
        })
        .catch(error=>{
          console.error(error.message);
          setLoading(false);
          setErrors(error.message)
        })
       
    }

    const handleValidateCaptcha = (e) =>{
      setErrors("")
      setDisable(true);
        const user_captcha_value = e.target.value;
        console.log(user_captcha_value);
        if(validateCaptcha(user_captcha_value)){
            setDisable(false);
        }else{
          setErrors("Invalid Captcha entry!")
            setDisable(true);
        }
    }

    return (
<>
<Helmet>
    <title>{`Task Manager | Log In`}</title>
</Helmet>
<div className="hero min-h-screen md:p-[80px] " style={{backgroundImage: `url(https://i.ibb.co/ccLNrdf/Gradient-Backggound.jpg)`}}>
  <div className="hero-content flex-col lg:flex-row w-full h-full border-[3px] border-gray-300 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
    <div className="text-center lg:text-left">
     <img src={authenticationImg} className='lg:w-[80%] mx-auto' alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm ">
      <form onSubmit={handleLogin} className="card-body text-yellow-300">
      {/* <form className="card-body text-yellow-300"> */}
        <h1 className="text-yellow-300 font-bold text-3xl mx-auto">LOGIN</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-yellow-300 font-semibold">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-yellow-300 font-semibold">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="mb-6 input input-bordered" required />
          <div className="captcha-container">
            <LoadCanvasTemplate className="w-full" />
          </div>
          <input type="text" onBlur={handleValidateCaptcha} name='captcha' placeholder="Write teh text above" className="input input-bordered mt-3" required />
          {/* <button type='button' onClick={handleValidateCaptcha}  className="btn btn-outline btn-xs bg-black bg-opacity-30 text-white mt-3 w-fit">Validate Captcha</button> */}
        </div>
        <label className="label">
            <a href="#" className="label-text-alt link link-hover text-yellow-300 font-semibold">Forgot password?</a>
        </label>
        <div className="form-control mt-0">
          {/* disabled={disable} */}
          {errors && <span className='text-red-500'>{errors}</span>}
          <input type="submit" disabled={disable} value={loading ? "Signing in..." : "Sign In"} className="btn bg-yellow-300 bg-opacity-70 text-white"></input>
          {/* <input type="submit" value="Sign In" className="btn bg-yellow-300 border-none text-xl font-semibold text-black"></input> */}
        </div>
        <p className="text-yellow-300 mx-auto">New here? <Link to="/register"><span className="font-bold">Create a new account</span></Link></p>
        <div className="flex flex-col items-center gap-3 mx-auto">
            <p className="text-yellow-300 font-semibold">Or sign in with</p>
            <div className="flex gap-6">
                <div className="rounded-full p-2 border-2 border-yellow-300 hover:border-yellow-300 text-yellow-300 hover:text-yellow-300 duration-200">
                    <FaFacebookF/>
                </div>
                <div onClick={handleGoogleSignIn} className="rounded-full p-2 border-2 border-yellow-300 hover:border-yellow-300 text-yellow-300 hover:text-yellow-300 duration-200">
                {/* <div className="rounded-full p-2 border-2 border-yellow-300 hover:border-yellow-300 text-yellow-300 hover:text-yellow-300 duration-200"> */}
                    <BsGoogle/>
                </div>
                <div className="rounded-full p-2 border-2 border-yellow-300 hover:border-yellow-300 text-yellow-300 hover:text-yellow-300 duration-200">
                    <BsGithub/>
                </div>
            </div>
        </div>
      </form>
    </div>
  </div>
</div>
</>

    );
};

Login.propTypes = {
    
};

export default Login;