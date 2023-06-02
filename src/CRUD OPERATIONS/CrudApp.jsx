import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmpCreate from './EmpCreate';
import EmpDetails from './EmpDetails';
import EmpEdit from './EmpEdit';
import Employee from './EmpListing';
    
const CrudApp = () => {
    return (
        <div style={{ textAlign: "center", fontWeight: "550", fontSize: "3rem" }}>
            <h1>CRUD OPERATIONS</h1>
            {/* <Divider /> */}
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Employee />} />
                        <Route path='/employee/create' element={<EmpCreate />} />
                        <Route path='/employee/details/:empid' element={<EmpDetails />} />
                        <Route path='/employee/edit/:empid' element={<EmpEdit />} />
                    {/* </Route> */}
                </Routes>
            </BrowserRouter>
        </div>
    );

}

export default CrudApp;