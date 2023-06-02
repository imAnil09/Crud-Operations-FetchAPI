import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import '../index.css';
// import EmpCreate from './EmpCreate';


const Employee = () => {

    const [empdata, empdatachange] = useState(null);

    const { empid } = useParams();

    const navigate = useNavigate();

    const LoadDetails=(id)=>{
        navigate("/employee/details/"+id);
    }
    
    const LoadEdit =(id)=>{
        navigate('/employee/edit/'+id)
    }
    const RemoveFunction =(id)=>{
        if(window.confirm('Do you want to remove?')){
            fetch("http://localhost:8000/employee/"+id, {
            method:"DELETE"
        }).then((res)=>{
            alert('Deleted successfully.')
            window.location.reload();
        }).catch((err)=>{
            console.log(err.message);
        })
        }
    }

    useEffect(()=>{
        fetch("http://localhost:8000/employee")
        .then((res)=>{
            return res.json()}
        ).then((res) =>{
            empdatachange(res);
        }).catch((error)=>{
            console.log(error.message);
        })
    },[])
    
  return (
    <div className='container'>
        <div className='card'>
            <div className='card-title'>
                <h2>Employee Listing</h2>
            </div>
            <div className='card-body'>
                <div style={{float:"left"}}>
                <Link to="/employee/create" className='btn btn-success'>Add New (+)</Link>
                </div>  
                <table className='table table-bordered'>
                    <thead className='bg-dard text-white'>
                        <tr style={{color:"black", fontSize:"1rem"}}>
                            <td>ID</td>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Phone </td>
                            <td>Action </td>
                        </tr>
                    </thead>
                    <tbody style={{fontSize:"1rem"}}>
                        {empdata &&     
                            empdata.map(item =>(
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td>
                                    <a onClick={()=>LoadEdit(item.id)} className='btn btn-success'>Edit</a>
                                    <a onClick={()=>RemoveFunction(item.id)} className='btn btn-danger'>Remove</a>
                                    <a onClick={()=>LoadDetails(item.id)} className='btn btn-primary'>Details</a>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Employee;