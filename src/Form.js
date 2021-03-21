import { useState } from "react";
import hashPassword from "./shared_functions/hash";
import logo from './logo.svg';
import validateEmailRegex from "./shared_functions/EmailRegex";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Form = () => {
  const [name ,setName] = useState('');
  const [validEmial, emailInputValidate] = useState(true);
  const [email ,setEmail] = useState('');
  const [password ,setPassword] = useState('');
  var filled = password && validEmial && email;
  const updateEmail = (target) => {
      setEmail(target.value)
      emailInputValidate(validateEmailRegex(target.value))
      
  }
  const submitForm = () =>{
    if(filled && validateEmailRegex(email)){
        console.log(hashPassword(password))
        toast.success('form submitted',
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        })
        setEmail('')
        setPassword('')
        setName('')
    }else{
      toast.error('incorrect input',
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      }
      )
    }
    
  }
  return (
    <div className='form-outter-wrapper'>
        <div className="logo-wrapper">
              <img src={logo} className="App-logo" alt="logo" />
        </div>
      <div className='form-wrapper rounded bg-gray-100 p-4'>
        <ToastContainer/>
        <span className="form-head">Sign Up</span>
        <div className="container mx-auto p-4 bg-gray-50 rounded">
        <form
         onSubmit={e => {
          e.preventDefault();
            submitForm();
          }}
         className="form"
         >
             <div className="input-group">   
                <input 
                required 
                type="text" 
                id="fullname"
                name="fullname"
                onChange = {e => setName(e.target.value)}
                value = {name}
                />
                <label htmlFor="fullname"><span className="content">fullname</span></label>
            </div>
            <div className="input-group">
                <input 
                required 
                type="email" 
                name="email" 
                id="email"
                match={validEmial.toString()}
                onChange = {e => updateEmail(e.target)}
                value = {email}
                />
                <label htmlFor="email"><span className="content">email</span></label>
            </div>
            <div className="input-group">
                <input
                 required 
                 type="password" 
                 name="password" 
                 id="password"
                 value = {password}
                  onChange = {e => setPassword(e.target.value)}
                 />
                <label htmlFor="password"><span className="content">password</span></label>
            </div>  
            <button className={'font-bold ' + ( filled? "filled" : "") } disabled={!filled} >Sign Up</button>           
        </form>
        </div>
      </div>
    </div>

  );
}

export default Form