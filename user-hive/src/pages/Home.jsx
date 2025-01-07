import style from './home.module.css'


const Home = () => {
  return (
    <div className={style.conatiner}>
      <div className={style.side1}>
        <h2>Hello</h2>
        <h1>I am <span>Saidos Hits</span> </h1>
        <p>Lorem ipsum dolor sit<br/> amet consectetur adipisicing elit. Dolorem, qui!</p>
        <div className={style.btn}>
        <button >Click</button>
        <button >Me</button>


        </div>

      </div>
      <div className={style.side2}>
        <figure>
          {/* <img src='/public/profile_pic.png' alt='logo'/> */}
        </figure>
      </div>


    </div>
  )
}

export default Home