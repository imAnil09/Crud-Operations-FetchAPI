import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const EmpCreate = () => {
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    // const [active, setActive] = useState(true)
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const empdata={name,email,phone};

        fetch("http://localhost:8000/employee", {
            method:"POST",
            headers:{"content-type":"application/json"},
            body: JSON.stringify(empdata)
        }).then((res)=>{
            alert('Saved successfully.')
        }).catch((err)=>{
            console.log(err.message);
        })
        navigate("/");
    }
    
  return (
    <div className='row'>
        <div className='offset-lg-3 col-lg-6'>
            <form className='container' onSubmit={handleSubmit}>
                <div className='card'>
                    <div className='card-title'>
                        <h2>Employee Create</h2>
                    </div>
                    <div className='card-body'>
                        <div className='row' style={{fontSize:"1rem", display:"flex", justifyContent:"flex-start !important"}}>
                            <div className='col-lg-12'>
                                <div className='form-group'>
                                    <label>ID</label>
                                    <input disabled={true} value={id} onChange={(e)=>setId(e.target.value)} className='form-control'></input>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='form-group'>
                                    <label>Name</label>
                                    <input value={name} onChange={(e)=>setName(e.target.value)} className='form-control'></input>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='form-group'>
                                    <label>Email</label>
                                    <input value={email} onChange={(e)=>setEmail(e.target.value)} className='form-control'></input>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='form-group'>
                                    <label>Phone</label>
                                    <input value={phone} onChange={(e)=>setPhone(e.target.value)} className='form-control'></input>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='form-group'>
                                    <button className='btn btn-success' type='submit'>Save</button>
                                    <Link to="/" className="btn btn-danger">Back</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default EmpCreate;