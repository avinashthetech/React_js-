import React, { useEffect, useState } from "react";
import style from "./fetchapi.module.css";
export const FechApi = () => {
  let [dbData, setDbData] = useState(null);
    useEffect(() => {
    async function fetchData() {
      let response = await fetch("https://api.github.com/users");
      let data = await response.json();
      console.log(data); // [{},{},{},{},{}........] 10s
      setDbData(data);

      //console.log(response)
    }
    fetchData();
  }, []);
  console.log(dbData);



  return (
    <div className={style.usersContainer}>
      <h1>Fech Api</h1>


      {dbData?.map((ele)=> {

        let {login,avatar_url,type,id}=ele;
        return(
        <section className={style.user} key={id}>
                    <img src={avatar_url} height={200} width={200} alt="kuchapikiimg"/>

          {/* <h1>{ele.login}</h1> */}
          <h4>Neme{login}</h4>
          <h4>Type:{type}</h4>
          {/* <img src={ele.avatar_url} height={200} width={200}/> */}
          
          <button>View More</button>


        </section>
        );
      })}
    </div>
  );
};
