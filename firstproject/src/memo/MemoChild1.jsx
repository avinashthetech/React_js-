import React from 'react'

const MemoChild1 = ({display}) => {
    console.log("MemoChild1");
  return (
    <div><h1>MemoChild1</h1></div>
  )
}

export default React.memo(MemoChild1);