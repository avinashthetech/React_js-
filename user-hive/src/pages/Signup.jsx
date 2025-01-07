import { useState } from "react";
import style from "./sigup.module.css";
import axios  from 'axios';
import toast from 'react-hot-toast';


const Signup = () => {
  let [formData, setFormData] = useState(
    {
    username: "",
    useremail: "",
    userpassword: "",
    phone: "",
    gender:"",
    dob:"",
    agreement:false,
  });



  const handleFormData = (e) => {


    const { name, value ,type,checked} = e.target;  // Destructure the name and value from the target (input element)
    setFormData({ ...formData, [name]: type==="checkbox"?checked: value });  // Update the formData state

  };
  
  let formSubmit=(e)=>{
    e.preventDefault();
    // console.log(e);
    console.log(formData);
    if(formData.agreement){
       axios.post('http://localhost:8080/users',formData)
      // axios.post('http://localhost:8080/api/auth/user', formData)
      .then(() => {
        console.log("data sent succussfully");
        toast.success('data sent succussfully')
        //clearing input fields
        setFormData(
          {
            username: "",
            useremail: "",
            userpassword: "",
            phone: "",
            gender:"",
            dob:"",
            agreement:false,
          }
        )


        
      }).catch((err) => {
        console.log(err);
        console.log("something went wrong");

        
      })
    }
    else{
      // alert('accept the agreement')
      toast.error('accept the agreement')

    }
  }
    return (
      <div className={style.Signup}>
        <h1>Signup Form</h1>
        <form onSubmit={formSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleFormData}
            placeholder="Enter Your username"
          />
  
          <label htmlFor="useremail">Email</label>
          <input
            type="email"
            name="useremail"
            id="useremail"
            value={formData.useremail}
            onChange={handleFormData}
            placeholder="Enter a email"
          />
  
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleFormData}
            placeholder="Enter a phone number"
            minLength={10}
            maxLength={10}
          />
  
          <label htmlFor="userpassword">Password</label>
          <input
            type="password"
            name="userpassword"
            id="userpassword"
            value={formData.userpassword}
            onChange={handleFormData}
            placeholder="Enter password"
          />
  
          <div className={style.gender}>
            <label>Gender</label>
            <label htmlFor="male">Male</label>
            <input
              type="radio"
              name="gender"
              id="male"
              value="Male"
              checked={formData.gender === "Male"}
              onChange={handleFormData}
            />
  
            <label htmlFor="female">Female</label>
            <input
              type="radio"
              name="gender"
              id="female"
              value="Female"
              checked={formData.gender === "Female"}
              onChange={handleFormData}
            />
          </div>
  
          <div className={style.dob}>
            <label htmlFor="dob">DOB</label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleFormData}
            />
          </div>
  
          <div className={style.checkbox}>
          <input type="checkbox"  name="agreement"checked={formData.agreement} onChange={handleFormData}/>
          <span>Agree & continue</span>
          </div>
  
          <div className={style.btn}>
            <button type="submit" className="th-btn">
              Signup
            </button>
          </div>
        </form>
      </div>
    );
  };
  
  export default Signup;