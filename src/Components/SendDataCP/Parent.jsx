import React, { useState } from 'react'
import child from  './Child'

export default function Parent() {
    let [data, setData] = useState([])

    function parentFun(x) {
        setData(x)
    }
    return (
        <>
            <h1>Sending Data from chile data to Parent data component i.e Lifting state up</h1>
            <h2>This is Parent component</h2>
            {
                data.length ?
                    <table border={2} cellPadding={10} cellSpacing={0}>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Designation</th>
                                <th>Salary</th>
                                <th>city</th>
                                <th>state</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map(item => {
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
                    </table> : null
            }
            <hr />
            <child parentFun={parentFun} />
        </>
    )
}