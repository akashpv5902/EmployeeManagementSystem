import React from 'react'
import Employee from './Employee'
import Table from 'react-bootstrap/Table';
import { BsFillPencilFill,BsFillTrashFill,BsFillPersonPlusFill } from "react-icons/bs";
import {Button } from 'react-bootstrap'
import {Link,useNavigate} from 'react-router-dom'

function Home() {
    // console.log(Employee);


    const history=useNavigate();

    const handleDelete=(id)=>{
    
      let index = Employee.map((item)=>item.id).indexOf(id)
      console.log(index);
      Employee.splice(index,1);
      console.log(Employee);
      history('/')
      alert('deleted')

    }


    const handleEdit=(id,ename,age,designation,salary)=>{
       localStorage.setItem("ID",id);
       localStorage.setItem("NAME",ename);
       localStorage.setItem("AGE",age);
       localStorage.setItem("DESIGNATION",designation);
       localStorage.setItem("SALARY",JSON.stringify(salary));
    }
  return (
    <div>

        <h1 className='text-center mt-5'>Employee Management System</h1>

        <p className='text-center'>
        An employee management system is a distributed system developed to maintain the employee details and the company workflow process systematically
        </p>

       <Link to={'/add'}><Button className='bt btn-success ms-4'>Add    <BsFillPersonPlusFill/></Button></Link> 

         <Table striped bordered hover variant="primary" style={{margin:"30px",border:"2px solid aquamarine "}}>
      <thead>
        <tr>
          <th>Id</th>
          <th>Employee Name</th>
          <th>Age</th>
          <th>Designation</th>
          <th>Salary</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
       {
      Employee && Employee.length>0 ?

      Employee.map((item)=>(
            <tr>
                <td>{item.id}</td>
                <td>{item.ename}</td>
                <td>{item.age}</td>
                <td>{item.designation}</td>
                <td>{item.salary}</td>
                <td><Link to={'/edit'}>
                  <Button onClick={()=>handleEdit(item.id,item.ename,item.age,item.designation,item.salary)}><BsFillPencilFill/></Button>
                  </Link>&nbsp;&nbsp;
                <Button onClick={()=>handleDelete(item.id)} className='btn btn-danger'><BsFillTrashFill/></Button></td>
            </tr>
      ))

      :"No data available"
       }
      </tbody>
    </Table>
      
    </div>
  )
}

export default Home
