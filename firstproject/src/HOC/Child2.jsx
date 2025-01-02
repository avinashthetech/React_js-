import React from 'react'
import Hoc from './Hoc';

const Child2 = (y) => {
    console.log(y.data)
  return (
    <div>
<h1>HOC CHILD 2</h1>
    </div>
  )
}

export default Hoc(Child2);