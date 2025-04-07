import React from 'react'
const P2p2 = ({store}) => {
    function navigation(event){
        store.dispatch({"type": "page",
           "data": event.currentTarget.getAttribute("val")})
    }
  return (
    <div>
      <a onClick={navigation} val={"Page1"}>Page1</a>
      <a onClick={navigation} val={"P2p1"}>Page2</a>
      <br></br><br></br><br></br>
      <a onClick={navigation} val={"P2p1"}>P2-p1</a>
      <a onClick={navigation} val={"P2p2"}>P2-p2</a>
      <br></br><br></br><br></br>
      <h1>This is page2 to page2</h1>
    </div>
  )
}
export default P2p2
