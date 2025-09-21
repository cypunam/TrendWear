///////     BASIc     ////////////



// import React from 'react'

// export default function Navbar() {
//   return (
//     <>
//        <ul>
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/about">About</Link></li>
//           <li><Link to="/profile">Profile</Link></li>
//           <li><Link to="/contactus">Contactus</Link></li>
//        </ul>
//     </>
//   )
// }







//////////// ADVANCE ////////////




import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
       <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/profile/Punam Kumari/Student/20000">Profile</NavLink></li>
          <li><NavLink to="/contactus?name=Payal&dsg=Student&salary=22000">Contactus</NavLink></li>
       </ul>
    </>
  )
}
