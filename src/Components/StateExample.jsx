import { useState } from "react"

export default function StateExample() {
    let [num,setNum] = usestate (1) 

    function decrement() {
        setNum(num-1) 
    }
    function increment() {
        setNum(num+1)
    }
    return (
        <>
          <h1>State Example</h1>
          <h2>num = {num}</h2>
          <button onClick={decrement}>Decrement</button>
          <button onClick={increment}>Increment</button>
        </>
    )
}







// import { useState } from "react"

// export default function StateExample() {
//     let [num,setNum] = usestate (1) 

//     return (
//         <>
//           <h1>State Example</h1>
//           <h2>num = {num}</h2>
//           <button onClick={() => num > 1 ? setNum(num - 1) : null}>Decrement</button>
//           <button onClick={() => setNum(num + 1)}>Increment</button>
//         </>
//     )
// }





// import { useState } from "react"

// export default function StateExample() {
//     let [num1,setNum1] = usestate (1)
//     let [num2,setNum2] = usestate (1) 
//     let [num3,setNum3] = usestate (1)  

//     return (
//         <>
//           <h1>State Example</h1>
//           <h2>num1 = {num1}</h2>
//           <button onClick={() => num > 1 ? setNum(num - 1) : null}>Decrement</button>
//           <button onClick={() => setNum(num + 1)}>Increment</button>
//           <hr />
//           <h2>num2 = {num2}</h2>
//           <button onClick={() => num2 > 1 ? setNum2(num2 - 1) : null}>Decrement</button>
//           <button onClick={() => setNum2(num2 + 1)}>Increment</button>
//           <hr />
//           <h2>num3 = {num3}</h2>
//           <button onClick={() => num3 > 1 ? setNum3(num3 - 1) : null}>Decrement</button>
//           <button onClick={() => setNum3(num3 + 1)}>Increment</button>
//         </>
//     )
// }






import { useState } from "react"

export default function StateExample() {
    let [num1,setNum1] = usestate (1)
    let [num2,setNum2] = usestate (1) 
    let [num3,setNum3] = usestate (1)  
    function increment(){
        if ((num1 + 1) % 10 == 0)
            setNum2(num2 + 1)
        if((num1 + 1) % 30 == 0)
            setNum3(num3 + 1)

        setNum1(num1 + 1)
    }
    return(
        <>
            <h1>State Example</h1>
            <h2>num1 = {num1} | num2 = {num2} | num3 = {num3} </h2>
            <button onClick={increment}>Increment</button>
        </>
    )
}