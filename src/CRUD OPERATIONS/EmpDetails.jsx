import { Divider, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const EmpDetails = () => {

    const [empdata, empdatachange] = useState(null);

    const { empid } = useParams();

    useEffect(() => {
        fetch("http://localhost:8000/employee/" + empid)
            .then((res) => {
                return res.json()
            }
            ).then((res) => {
                empdatachange(res);
            }).catch((error) => {
                console.log(error.message);
            })
    }, [])

    return (
        <div>
            <hr />
            <h3>Employee Details</h3>
            <hr />
            {/* <br /> */}
            {empdata &&
                <React.Fragment>
                    <center>
                    <Grid container lg={8}>
                        <Grid xs={6} item sx={{textAlign:"left"}}>
                            <Typography>Employee Name: </Typography>
                            <Typography>Employee Number: </Typography>
                            <Typography>Employee Email: </Typography>
                            <Divider />
                        </Grid>
                        <Grid xs={6} item sx={{textAlign:"left"}}>
                            <Typography>{empdata.name}</Typography>
                            <Typography>{empdata.phone}</Typography>
                            <Typography>{empdata.email}</Typography>

                            {/* <h1>The Employee name is : {empdata.name} ({empdata.id})</h1>
                <h1>Mobile Number: {empdata.phone}</h1>
                <h1>Email Address: {empdata.email}</h1> */}

                            <Divider />
                        </Grid>
                    </Grid>
                    </center>
                    <div>
                        <Link to="/" className='btn btn-danger'>Back</Link>
                    </div>
                </React.Fragment>
            }
        </div>
    )
}

export default EmpDetails