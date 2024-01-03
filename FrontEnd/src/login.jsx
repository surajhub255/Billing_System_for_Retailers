import React from "react";
import { useFormik } from "formik";
import './index.css'
import './login.css'
import AdminHome from './adminHome'
import { useNavigate } from "react-router-dom";
import Axios from 'axios'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

// const validate = (values) => {

//     const ans = {};

//     if (!values.id) {
//         ans.id = "Enter your id"
//     }

//     const cond1 = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})"
//     if (!values.pass) {
//         ans.pass = "Enter Pin"
//     }

//     else if (!values.pass.match(cond1))
//         ans.pass = "Password must contain one uppercase and one lowercase and a number"

//     return ans;

// }

const Login = () => {
     const navi=useNavigate();

    const formikk = useFormik({

        initialValues: {
            id: "",
            pass: ""
        }, 
        onSubmit: async(values) => {
            console.log(values)
            Axios.post("http://localhost:9091/login",values).then((res)=>{
                if(res.data=="staff"){
                    navi('/makeBill')
                }
                else if(res.data=="admin"){
                    navi('/AdminHome')
                }
                else{
                    alert("Credentials don't match")
                    navi('/')
                }
            })

        }
    })

    return (

        <div className="logstyle">

                    <form onSubmit={formikk.handleSubmit} >
                    <h1>Log In</h1><br/>
                        
                        <Box
                        component="form"
                        sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField  label="Staff ID" variant="filled" type="text"

                           name="id"
                           onBlur={formikk.handleBlur}
                           onChange={formikk.handleChange}
                           value={formikk.values.id} />+
                    </Box>
                    {formikk.touched.id && formikk.errors.id ? <div>{formikk.errors.id}</div> : null}<br />
                        <Box
                        component="form"
                        sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField label="Password" variant="filled" type="password"
                            name="pass"
                            onBlur={formikk.handleBlur}
                            onChange={formikk.handleChange}
                            value={formikk.values.pass} />
                    </Box>
                        {formikk.touched.pass && formikk.errors.pass ? <div>{formikk.errors.pass}</div> : null}
                        <br />
                      
                        
                        <Button  variant="contained" type="submit" > Log In</Button>

                    </form>

                </div>

    )

}
export default Login