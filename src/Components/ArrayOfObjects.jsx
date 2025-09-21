export default function ArrayOfObjects(){
    let data = [
        { id: 1001, name: "Punam Kumari", dsg: "Software Developer", salary: 25000, city: "greater Noida", state:"UP"},
        { id: 1001, name: "Puja Kumari", dsg: "Software Engineer", salary: 20000, city: "Noida", state:"UP"},
        { id: 1001, name: "Payal Kumari", dsg: "Android Developer", salary: 22000, city: "Noida", state:"UP"},
        { id: 1001, name: "Priyanke Kumari", dsg: "System Engineer", salary: 23000, city: "Noida", state:"UP"}, 
    ] 
    return (
        <>
          <h1>Array of objects Example</h1>
          <table border={2} cellPadding={10} cellSpacing={0}>
             <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Designation</th>
                    <th>Salary</th>
                    <th>City</th>
                    <th>State</th>
                </tr>
             </thead>
             <tbody>
                {
                    data.map((item) =>{
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


















   