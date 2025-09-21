var name = "Punam Kumari"
var arr = [10,20,30,40,50,60,70,80,90,100]
var emp = {
    id:1001,
    name:"Punam Kumari",
    dsg:"Student",
    salary:10000,
    city:"Delhi",
    state:"Delhi"
}
class Test {
    show() {
        return (
            <h2>This is show() of Test Class</h2>
        )
    }
}

    function ModuleExample(){
    return(
        <>
    <h1>Export import Example i.e Module example </h1>
    <h2>This is ModuleExample Component</h2>
    </>
    )
}
export default ModuleExample             //Default export
export { name, arr, emp, Test }          //Name Export  