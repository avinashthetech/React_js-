import React, { createContext } from 'react'


export let GlobalData2=createContext()
export const Profile = (x) => {
    console.log(x);

    let data=[{id:1,name:"Avinash"},
        {id:2,name:"Aman"},
        {id:3,name:"Rahul"}
    ]
  return (
    <div>
    
        <GlobalData2.Provider value={data}>
            {x.children}

        </GlobalData2.Provider>
    </div>
  )
}
