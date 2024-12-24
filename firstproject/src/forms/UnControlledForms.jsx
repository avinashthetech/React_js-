import React, { useRef } from 'react'

export const UnControlledForms = () => {

    let usernameRef=useRef();
    let emailRef=useRef();
    let passwordRef=useRef();

    let formSubmit=(e)=>{
        e.preventDefult();

        let user ={
            username:usernameRef.current.value,
            email:emailRef.current.value,
            password:passwordRef.value
        }
        console.log(user)
    }
  return (
    <div>


        <h1>UnControlled Forms</h1>

        <form onSubmit={formSubmit}>
            <label > name: </label>
            <input type="text"  ref={usernameRef}/>
            <br /><br />
            <label > email: </label>
            <input type="email"  ref={emailRef}/>
            <br /><br />
            <label > password: </label>
            <input type="password"  ref={passwordRef}/>
            <br /><br />
            <button type="submit">Submit</button>
            
        </form>
    </div>
  )
}
