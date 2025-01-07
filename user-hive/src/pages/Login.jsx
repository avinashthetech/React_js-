
import sytle from './logout.module.css'

const login = () => {
  return <div className={sytle.login}>


    <h1>Login Form</h1>
    <div className={sytle.picimg}>    
      <img src='/public/profile_pic.png' alt="alt" className={sytle.pic}/>


    </div>
    <form action="">
      <label htmlFor="username">UserName</label>
      <input type="text" name="username" placeholder="Enter Your username" />
      <label htmlFor="password">Password</label>
    <input type="password" name="password" id="password"  placeholder="Enter Your Password"/>

    <div className={sytle.btn}>

    <button type="submit" className='th-btn'>LOGIN</button>
    </div>
    <div className={sytle.checkdiv}>
      <input type="checkbox"  />
      <span>Remember me | <span> <a href="#"></a> Forgot pasword</span></span>
    </div>



    </form>


  </div>;
};

export default login;
