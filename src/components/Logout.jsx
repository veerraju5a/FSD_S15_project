import React from 'react'

const Logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/"; // or redirect however you want
  return (
    <div>
      
    </div>
  )
}

export default Logout
