import React from 'react'
import  Row  from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Employee from './Employee';
import {useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';

function Add() {

  const [id,setId]=useState('')
  const [ename,setEname]=useState('')
  const [age,setAge]=useState('')
  const [designation,setDesignation]=useState('')
  const [salary,setSalary]=useState(0) 

   let history=useNavigate()

  const handleData=(e)=>{
    e.preventDefault();
    let ids=uuid()
    console.log(ids);
    let uniqueId=ids.slice(0,8)
    console.log(uniqueId);
    Employee.push({//add data to employee array
      id:uniqueId,
      ename:ename,
      age:age,
      designation:designation,
      salary:salary
    })

    history('/')

  }
  return (
    <div>
        <h1 className='text-center mt-5'>Update Employee Details</h1>
      <p className='text-center'>
        An employee management system is a distributed system developed to maintain the employee details and the company workflow process systematically
        </p>

        <Row>
          <Col md={5}>
            <img className='ms-4' style={{width:"600px",height:"500px"}} src='https://www.pngarts.com/files/3/Employee-Avatar-Transparent-Image.png' alt='emp'/>
          </Col >
          <Col md={6}>
          <Form className='ms-4 border border-4 p-3'>
      <Form.Group className=" mb-3 me-5" >
        <h3 className='text-center'>Update Your Details</h3>
        <Form.Label>Employee Name</Form.Label>
        <Form.Control
        //  value={ename}
        onChange={(e)=>setEname(e.target.value)}
         type="text" placeholder="Enter your name" required />
      </Form.Group>

      <Form.Group className=" mb-3 me-5" >
        <Form.Label>Age</Form.Label>
        <Form.Control  type="number"
        //  value={age} 
        onChange={(e)=>setAge(e.target.value)} 
        placeholder="Enter your age" required />
      </Form.Group>

      <Form.Group className=" mb-3 me-5" >
        <Form.Label>Designation</Form.Label>
        <Form.Control type="text" 
        // value={designation}
         onChange={(e)=>setDesignation(e.target.value)} 
         placeholder="Enter your Designation" required />
      </Form.Group>

      <Form.Group className="mb-3 me-5" >
        <Form.Label>Salary</Form.Label>
        <Form.Control type="text" 
        // value={salary}
         onChange={(e)=>setSalary(e.target.value)} 
         placeholder="Salary" required />
      </Form.Group>
      <Form.Group className="mb-3">
      </Form.Group>
      <Button className='button' variant="success" onClick={(e)=>handleData(e)} type="submit">
        Add
      </Button>
    </Form>
          </Col>
        </Row>
    </div>
  )
}

export default Add
