// //// sort form/////


import React, { useState } from 'react'

export default function InputExample() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    designation: "",
    salary: "",
    city: "",
    state: "",
  });

  function getInputData(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  function postData(e) {
    e.preventDefault();
    alert(`
        Name          : ${data.name}
        Email         : ${data.email} 
        Phone         : ${data.phone}
        Designation   : ${data.designation}
        Salary        : ${data.salary}
        City          : ${data.city} 
        State         : ${data.state}
    `);
  }

  return (
    <div className="main">
      <div className="center">
        <h1>Input Example</h1>
        <h2>Name : {data.name}</h2>
        <h2>Email : {data.email}</h2>
        <h2>Phone : {data.phone}</h2>
        <h2>Designation : {data.designation}</h2>
        <h2>Salary : {data.salary}</h2>
        <h2>City : {data.city}</h2>
        <h2>State : {data.state}</h2>

        <form onSubmit={postData}>
          <input type="text" name="name" required onChange={getInputData} placeholder="Full Name" /> <br/>
          <input type="email" name="email" required onChange={getInputData} placeholder="Email Address" /> <br/>
          <input type="text" name="phone" required onChange={getInputData} placeholder="Phone Number" /> <br/>
          <input type="text" name="designation" required onChange={getInputData} placeholder="Designation" /> <br/>
          <input type="number" name="salary" required onChange={getInputData} placeholder="Salary" /> <br/>
          <input type="text" name="city" onChange={getInputData} placeholder="City Name" /> <br/>
          <input type="text" name="state" onChange={getInputData} placeholder="State Name" /> <br/>

          {/* only use type="submit", no need onClick */}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}













////long form///////




// import React, { useState } from 'react'

// export default function InputExample() {
//     let [name, setName] = useState("")
//     let [email, setEmail] = useState("")
//     let [phone, setPhone] = useState("")
//     let [designation, setDesignation] = useState("")
//     let [salary, setSalary] = useState("")
//     let [city, setCity] = useState("")
//     let [state, setState] = useState("")
//     function getInputData(e) {
//         setName(e.target.value)
//     }
//     function getInputData(e) {
//         let { name, value } = e.target
//         if (name === "name")
//             setName(value)
//         else if (name === "email")
//             setEmail(value)
//         else if (name === "phone")
//             setPhone(value)
//         else if (name === "salary")
//             setSalary(value)
//         else if (name === "designation")
//             setDesignation(value)
//         else if (name === "city")
//             setCity(value)
//         else if (name === "state")
//             setState(value)
//     }

//    function postData() {
//     alert(`
//         Name          : ${name}
//         Email         : ${email} 
//         Phone         : ${phone}
//         Designation   : ${designation}
//         Salary        : ${salary}
//         City          : ${city} 
//         State         : ${state}
//     `);
// }

//     return (
//         <>
//             <div className="main">
//                 <div className="center">
//                     <h1>Input Example</h1>
//                     <h2>Name :{name}</h2>
//                     <h2>Email :{email}</h2>
//                     <h2>Phone :{phone}</h2>
//                     <h2>Designation :{designation}</h2>
//                     <h2>Salary :{salary}</h2>
//                     <h2>City :{city}</h2>
//                     <h2>State :{state}</h2>
//                     <input type="text" name="name" onChange={getInputData} placeholder='Full Name' /> <br/>
//                     <input type="email" name="email" onChange={getInputData} placeholder='Email Address' /> <br/>
//                     <input type="text" name="phone" onChange={getInputData} placeholder='Phone Number' /> <br/>
//                     <input type="text" name="designation" onChange={getInputData} placeholder='designation' /> <br/>
//                     <input type="number" name="salary" onChange={getInputData} placeholder='Salary' /> <br/>
//                     <input type="text" name="city" onChange={getInputData} placeholder='City Name' /> <br/>
//                     <input type="text" name="state" onChange={getInputData} placeholder='State Name' />

//                     <button onClick={postData}>Submit</button>
//                 </div>
//             </div>
//         </>
//     )
// }



















// import React , { useState } from 'react'

// export default function InputExample() {
//     let [name, setName] = useState("")
//         function getInputData(e) {
//             setName(e.target.value)
//     }
//     function postData() {
//         AudioListener('Hello : ${name}')
//     }
//   return (
//    <>
//        <div className="main">
//         <div className="center">
//             <h1>Input Example</h1>
//             <input type="text" name="name" onChange={getInputData} placeholder='Full Name' />
//             <button onClick={postData}>Submit</button>
//         </div>
//        </div>
//    </>
//   )
// }




































// // import React , { useState } from 'react'

// // export default function InputExample() {
// //     let [name, setName] = useState("")
// //         function getInputData(e) {
// //             setName(e.target.value)
// //     }
// //     function postData() {
// //         AudioListener('Hello : ${name}')
// //     }
// //   return (
// //    <>
// //        <div className="main">
// //         <div className="center">
// //             <h1>Input Example</h1>
// //             <input type="text" name="name" onChange={getInputData} placeholder='Full Name' />
// //             <button onClick={postData}>Submit</button>
// //         </div>
// //        </div>
// //    </>
// //   )
// // }
