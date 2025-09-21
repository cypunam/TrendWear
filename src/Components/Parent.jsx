import React from 'react'
import Child from './Child'

export default function Parent() {
    
    let data = [
        { id: 1001, name: "Punam Kumari", dsg: "Software Developer", salary: 25000, city: "greater Noida", state:"UP"},
        { id: 1001, name: "Puja Kumari", dsg: "Software Engineer", salary: 20000, city: "Noida", state:"UP"},
        { id: 1001, name: "Payal Kumari", dsg: "Android Developer", salary: 22000, city: "Noida", state:"UP"},
        { id: 1001, name: "Priyanke Kumari", dsg: "System Engineer", salary: 23000, city: "Noida", state:"UP"}, 
    ] 
    return (
        <>
            <h1>Srnding Data From Parent to Child component i.e Props Example</h1>
            <h2>This is Parent Component</h2>
            <hr />
            <Child 
              name="Punam Kumari"
              arr={[10,20,30,40,50]}
              data={data}
            />
        </>
    )
}

