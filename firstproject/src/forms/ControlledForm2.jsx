import React from "react";
import { useState } from "react";

export const ControlledForm2 = () => {
  let [formData, setFormData] = useState(
    { useremail: "",
     userpassword: "" ,
    });

  let handleFormData = (e) => {
    let {name,value}=e.target;
    //  console.log({[name]:value});
    setFormData({...formData,[name]:value});

  };
  let formSubmit=(e)=>{
    e.preventDefault();
    console.log(formData);
}
  return (
    <div>
      <h1>Controlled Form -optimal way</h1>

      <form onSubmit={formSubmit}>
        {/* <label>Username : </label>
        <input type="text" /> */}
        <br />
        <br />
        <label>Useremail : </label>
        <input
          type="email"
          value={formData.useremail}
          onChange={handleFormData}
          name="useremail"
        />
        <br />
        <br />
        <label> Password : </label>
        <input
          type="password"
          value={formData.userpassword}
          onChange={handleFormData}
          name="userpassword"
        />
        <br />
        <br />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};