// import React from "react";
// import pic from "../assets/punam.jpg"; // works only if inside src/assets

// export default function ImageExample() {
//   return <img src={pic} width="300" alt="Punam" />
// }






 import React from 'react'
 import pic from '../assets/punam.jpg'
 export default function ImageExample(){
    return (
        <>
            <img src={pic} height="333px" width="500px" />
            <img src="/image/punam.jpg" height="333px" width="500px" />
        </>
    )
 }


