import React from 'react'

const Page1 = ({store}) => {
    function navigation(event){
        store.dispatch({"type": "page", 
          "data": event.currentTarget.getAttribute("val")})
    }
  return (
    <div>
      <a onClick={navigation} val={"Page1"}>Page1</a>
      <a onClick={navigation} val={"P2p1"}>Page2</a>
      <br></br><br></br><br></br>
     <h1> This is page1</h1>
    </div>
  )
}
export default Page1
