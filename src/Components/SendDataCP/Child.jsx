import React from 'react'


export default function child({ parentFun }) {
    let data = [
        { id: 1001, name: "Punam Kumari", dsg: "Software Developer", salary: 25000, city: "greater Noida", state: "UP" },
        { id: 1001, name: "Puja Kumari", dsg: "Software Engineer", salary: 20000, city: "Noida", state: "UP" },
        { id: 1001, name: "Payal Kumari", dsg: "Android Developer", salary: 22000, city: "Noida", state: "UP" },
        { id: 1001, name: "Priyanke Kumari", dsg: "System Engineer", salary: 23000, city: "Noida", state: "UP" },
    ]

    function SendData() {
        parentFun(data)
    }
    return (
        <>
            <h2>This is child Component</h2>
            <button> onClick={SendData}Send Data to Parent</button>
        </>
    )
}
