import React, { useState } from 'react'
import './Style.css';
export const Form = () => {
    const [name, setName] = useState("");
    const [fullname, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [resetPassword, setResetPassword] = useState("");
    

   const collectData = async (e) =>{
    e.preventDefault();
    let result = await fetch('http://localhost:3000/',{
        method: "Post",
        body : JSON.stringify({ fullname, name, email, password, resetPassword}),
        headers:{
            "Content-Type":"application/json"
        },
    });
       result = await result.json;
       localStorage.setItem("user",JSON.stringify(result));
   }


  return (
    <div className='container'>
        <form onSubmit={collectData}>
            <h1 className='text-center pt-3'>SIGNUP FORM</h1>
            <div className='mb-3 mt-3'>
                <label className='form-label'>Fullname</label>            
                <input type='text' className='form-control'
                value={fullname}
                 onChange={(e)=> setFullName(e.target.value)}/>
            </div>
            <div className='mb-3 mt-3'>
                <label className='form-label'>Username</label>            
                <input type='text' className='form-control'
                value={name}
                 onChange={(e)=> setName(e.target.value)}/>
            </div>
            <div className='mb-3'>
                <label className='form-label'>Email</label>            
                <input type='email' className='form-control'
                 value={email}
                 onChange={(e)=> setEmail(e.target.value)}/>
            </div>
            <div className='mb-3'>
                <label className='form-label'>password</label>            
                <input type='password' className='form-control'
                 value={password}
                 onChange={(e)=> setPassword(e.target.value)}/>
            </div>
            <div className='mb-3'>
                <label className='form-label'>resetPassword</label>            
                <input type='password' className='form-control'
                 value={resetPassword}
                 onChange={(e)=> setResetPassword(e.target.value)}/>
            </div>
       
             <div className='form-check'>
                <input className='form-check-input'type='checkbox' value={""} id='flexCheckChecked ' auto></input>
                <label className='form-check-label' for= "flexCheckChecked">
                    I agree with Terms and Conditions
                </label>
                </div>    
                <br></br>    
            <button type='submit' className='btn btn-success'>Submit</button>
        </form>
    
    </div>
  )
};
export default Form;
