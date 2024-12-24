import React, { useEffect, useState } from "react";
import style from "./fectapi2.module.css"
export const FetchApi2 = () => {
  let [bddata2, setDbData2] = useState(null);

  useEffect(() => {
    async function FetchData2() {
      let resp = await fetch("https://fakestoreapi.com/products");
      let data2 = await resp.json();
      console.log(data2);
      setDbData2(data2);
    }
    FetchData2();
  }, []);
  console.log(bddata2);

  return (
    <div className={style.usersContainer}>
      <h1>Second API</h1>
      {bddata2?.map((ele) => {
        let {id,image,title,price,category}=ele;
        return (
          <section className={style.user} kye={id}>
            <img src={image} height={200} width={200} />
            <h4>Title:{title}</h4>
            <h4>Category:{category}</h4>
            <h4>Price:{price}</h4>
            <button>View More</button>


          </section>
        );
      })}
    </div>
  );
};
