import { useState } from "react";

export const ControlledForms1 = () => {

    let [ username,setUsername] =useState("");
    let [useremail,setUseremail]=useState("");
    let [userpassword,setUserpassword]=useState("");

    let handleUsername =(e)=>{
        setUsername(e.target.value);
        // console.log("username");
    }
    let handleUseremail =(e)=>{
        setUseremail(e.target.value);
        // console.log("useremail");
    }
    let handleUserpassword =(e)=>{
        setUserpassword(e.target.value);
        // console.log("userpassword");
    }
    let formSumit =(e)=>{
        e.preventDefault();
        console.log({username,useremail,userpassword});

        setUsername("")
        setUseremail("")
        setUserpassword("")
    }

  return (
    <div>
      <h1>Controlled Forms</h1>
      <br/><br/>


      <form  onSubmit={formSumit}>
        <label>Name: </label>
        <input type="text"  value={username} onChange={handleUsername}></input>
        <br/><br/>
        <label >email: </label>
        <input type="email" value={useremail} onChange={handleUseremail}></input>
        <br/><br/>
        <label>password: </label>
        <input type="password"  value={userpassword} onChange={handleUserpassword}></input>
        <br/><br/>
        <button type="submit">Submit</button>

      </form>
    </div>
  );
};



