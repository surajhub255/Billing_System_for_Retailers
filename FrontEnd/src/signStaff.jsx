import React from "react";
import './signup.css'
import { useFormik } from 'formik';

import { useNavigate } from "react-router-dom";
 import Login from './login.jsx'
// import { Button } from '@mui/material'
 import Axios from 'axios'
// import image from '../src/nimg.jpg'
// import PersonIcon from '@mui/icons-material/Person';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

const validate = (values) => {
    const ans = {};
    if (!values.id) {
        ans.id = "Please Enter ID"
    }
    if (!values.name) {
        ans.name = "Please Enter Full Name"
    }
    if (!values.email) {
        ans.email = "Please Enter Email"
    }
    const cond1 = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})"
    if (!values.pass) {
        ans.pass = "Please Enter Password"
    }
    else if (!values.pass.match(cond1))
        ans.pass = "Password must contain one uppercase and one lowercase and a number"

    if (!values.type) {
        ans.type = " Member should be either Staff or Admin"
    }
    return ans;
}
const Signup = () => {
    const navigate = useNavigate();
    const formikk = useFormik({

        initialValues: {
            id: "",
            name: "",
            email: "",
            pass: "",
            type: "",
            status: "active"

        },validate,
        onSubmit: async (values) => {
            console.log(values)
            await Axios.post('http://localhost:9091/addstaff', values);
            alert("Staff Added Successfully")
            navigate('/')
        }
    })

    return (

        <div className="signbox" >

            <form onSubmit={formikk.handleSubmit}>

                <div className="box">
                    <h1 >Add Members</h1>       
                    <br />
                    <div className="side-textbox" >
                    <Box
                        component="form"
                        sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField  label="Staff ID" variant="filled" type="text"
                            name="id"
                            onChange={formikk.handleChange}
                            onBlur={formikk.handleBlur}
                             value={formikk.values.id}
                            placeholder="Enter Staff Id"
                            className="textBox" />
                    </Box><br />
                   
                    <Box
                        component="form"
                        sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField  label="Type" variant="filled"type="text"
                        name="type"
                        select
                        onChange={formikk.handleChange}
                        onBlur={formikk.handleBlur}
                        value={formikk.values.type}
                        placeholder="staff/admin"
                        className="textBox" >
                        <MenuItem value='staff' >
                            Staff
                        </MenuItem>
                        <MenuItem value='admin'>
                            Admin
                        </MenuItem>
                        </TextField>
                    </Box>
                    
                    </div>
                    {formikk.touched.id && formikk.errors.id ? <div>{formikk.errors.id}</div> : null}
                    {formikk.touched.type && formikk.errors.type ? <div>{formikk.errors.type}</div> : null}
                    <br />
                    <br />
                    <Box
                        component="form"
                        sx={{ '& > :not(style)': { m: 1, width: '52ch' } }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField  label="Full Name" variant="filled" 
                             type="text"
                             name="name"
                             onChange={formikk.handleChange}
                             onBlur={formikk.handleBlur}
                             value={formikk.values.name}
                             placeholder="Enter Full Name"
                             className="textBox" />
                    </Box>
                    {formikk.touched.name && formikk.errors.name ? <div>{formikk.errors.name}</div> : null}
                    <br />
                    <br />
                    <Box
                        component="form"
                        sx={{ '& > :not(style)': { m: 1, width: '52ch' } }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField label="E-mail" variant="filled" 
                             type="email"
                             name="email"
                             onChange={formikk.handleChange}
                             onBlur={formikk.handleBlur}
                             value={formikk.values.email}
                             placeholder="Enter staff EmailId"
                             className="textBox" />
                    </Box>

                    {formikk.touched.email && formikk.errors.email ? <div>{formikk.errors.email}</div> : null}
                    <br />
                    <br />
                      <Box
                        component="form"
                        sx={{ '& > :not(style)': { m: 1, width: '52ch' } }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField  label="Password" variant="filled" 
                           type="password"
                           name="pass"
                           onChange={formikk.handleChange}
                           onBlur={formikk.handleBlur}
                           value={formikk.values.pass}
                           placeholder="Enter Password"
                           className="textBox" />
                    </Box>
                    {formikk.touched.pass && formikk.errors.pass ? <div>{formikk.errors.pass}</div> : null}
                    <br />
                    <br />
                    <Button className="submit" type="submit" variant="contained">Submit</Button>
                </div>

            </form>
        </div>
    )

}
export default Signup


