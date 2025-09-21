import React, { Component } from 'react'

export default function Child({name,arr,data}) {
    return (
      <>
         <h2>This is Child Component</h2>
         <h3>Name : {name}</h3>
         <h3>Array : {arr?.join(" ")}</h3>
         <table bordetr={2} cellPadding={10} cellSpacing={0}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Designation</th>
                    <th>Salary</th>
                    <th>City</th>
                    <th>State</th>
                </tr>
            </thead>
            <tbody>
            {
                data?.map(item => {
                    return <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.dsg}</td>
                        <td>{item.salary}</td>
                        <td>{item.city}</td>
                        <td>{item.state}</td>

                    </tr>
                })
            }
            </tbody>
         </table>
      </>
    )
}

