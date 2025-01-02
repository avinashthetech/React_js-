import React from 'react'

const Hoc = (WrappedComp) => {
    let data="hello";
  return function (){
    return <WrappedComp data={data}/>
  }
}
export default Hoc;