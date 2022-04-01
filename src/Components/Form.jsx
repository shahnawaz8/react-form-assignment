import { useState , useEffect } from "react";
import axios from 'axios';
export const Form = () => {
    const [fetched, setFetched] = useState([]);
    const [userName, setUserName] = useState("")
    const [age, setAge] = useState("")
    const [address, setAddress] = useState("")
    const [department, setDepartment] = useState("")
    const [salary, setSalary] = useState("")
    const [merital, setMerital] = useState("")
    useEffect(()=>{
        getData()
    },[])
    const handleSubmit = (e)=>{
        let userData = {
            userName,
            age,
            address,
            department,
            salary,
            merital
        }
        e.preventDefault()
        // console.log("ok submit")
        // console.log(userName)
        // console.log(age)
        // console.log(address)
        // console.log(department)
        // console.log(salary)
        // console.log(userData)
        axios.post("http://localhost:8080/usersData",{
            userName,
            age,
            address,
            department,
            salary,
            merital
        }).then((res)=>{getData()})

    }
    const getData = ()=>{
        axios.get('http://localhost:8080/usersData').then((res)=>{setFetched(res.data)})
    }
    return (
        <>
        <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name :</label>
            <input type="text" value={userName} onChange={(e)=>{
                setUserName(e.target.value)
            }}/>
            <br />
            <label htmlFor="age">Age :</label>
            <input type="text" onChange={(e)=>{
                setAge(e.target.value)
            }}/>
            <br />
            <label htmlFor="age">Address :</label>
            <input type="text" onChange={(e)=>{
            setAddress(e.target.value)
            }}/>
            <br />
            <label htmlFor="age">Department :</label>
            <input type="text" onChange={(e)=>{
            setDepartment(e.target.value)
            }}/>
            <br />
            <label htmlFor="age">Salary :</label>
            <input type="text" onChange={(e)=>{
                setSalary(e.target.value)
                
            }}/>
            <br />
            <label htmlFor="age">Marital state :</label>
            <input type="checkbox" onChange={(e)=>{
                setMerital(e.target.value)
            }}/>
            <br />

            <input type="submit" />
        </form>
        <div style={{'display':'grid',"gridTemplateColumns":'auto auto auto auto','border':'1px solid red'}}>
        {fetched.map((el)=>{
            return(
                <>
                    <div style={{'width':'260px','margin':'10px','border':'1px solid blue'}}>   
                        <h3>Name : {el.userName}</h3>
                        <p>Age :  {el.age}</p>
                        <h4>Department : {el.department}</h4>
                        <h4>Salary : {el.salary}</h4>
                        

                        
                    </div>

                </>
                )
            })}    
            </div>
            <h1>footer</h1>
        </div>
        

        </>
    )
}