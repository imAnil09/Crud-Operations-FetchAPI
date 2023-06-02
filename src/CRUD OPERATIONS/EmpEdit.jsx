import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

const EmpEdit = () => {

    // const [empdata, empdatachange] = useState(null);

    const { empid } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:8000/employee/" + empid)
            .then((res) => {
                return res.json()
            }
            ).then((res) => {
                // empdatachange(res);
                setId(res.id);
                setName(res.name);
                setEmail(res.email);
                setPhone(res.phone);
            }).catch((error) => {
                console.log(error.message);
            })
    }, [])
    

    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    // const [active, setActive] = useState(true)
    // const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const empdata={id,name,email,phone};
        // console.log({id,name,email,phone,});

        fetch("http://localhost:8000/employee/"+empid, {
            method:"PUT",
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
                    <h2>Employee Edit</h2>
                </div>
                <div className='card-body'>
                    <div className='row' style={{fontSize:"1rem"}}>
                        <div className='col-lg-12'>
                            <div className='form-group'>
                                <label>ID</label>
                                <input value={id} onChange={(e)=>setId(e.target.value)} className='form-control'></input>
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
                        {/* <div className='col-lg-12'>
                            <div className='form-check'>
                                <input type="checkbox" className='form-control-input'></input>
                                <label value={active} onChange={(e)=>setActive(e.target.checked)} className='form-check-label'>is Active</label>
                            </div>
                        </div> */}
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

export default EmpEdit