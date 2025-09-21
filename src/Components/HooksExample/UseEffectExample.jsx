import React, { useState, useEffect } from 'react'

export default function UseEffectExample() {
    let [num1, setNum1] = useState(1)
    let [num2, setNum2] = useState(1)
    let [num3, setNum3] = useState(1)

    // let count = 0

    // useEffect(() => {
    //     setInterval(() => {
    //         console.log(count)
    //         if (count === 30) {
    //             alert("Session Timeout")
    //             count = 0
    //         }
    //         else
    //             count++
    //     }, 1000)
    //     return () => clearInterval(time)
    // })

    // Runs after every render
    useEffect(() => {
        console.log("useEffect without dependency array -> Runs after every render")
    })

    // Runs only once (on mount)
    useEffect(() => {
        console.log("useEffect with [] -> Runs only once on mount")
    }, [])

    // Runs when num2 changes
    useEffect(() => {
        console.log("useEffect with [num2] -> Runs only when num2 changes")
    }, [num2])

    return (
        <>
            <h1>useEffect Example</h1>

            <h1>num1 = {num1}</h1>
            <button onClick={() => setNum1(num1 - 1)}>Decrement num1</button>
            <button onClick={() => setNum1(num1 + 1)}>Increment num1</button>
            <hr />

            <h1>num2 = {num2}</h1>
            <button onClick={() => setNum2(num2 - 1)}>Decrement num2</button>
            <button onClick={() => setNum2(num2 + 1)}>Increment num2</button>
            <hr />

            <h1>num3 = {num3}</h1>
            <button onClick={() => setNum3(num3 - 1)}>Decrement num3</button>
            <button onClick={() => setNum3(num3 + 1)}>Increment num3</button>
            <hr />
        </>
    )
}
