import React from "react";
import './signup.css'
import { useFormik } from 'formik';
import { useNavigate } from "react-router-dom";
import Login from './login.jsx'
import Axios from 'axios'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
const AddProducts = () => {
    const navigate = useNavigate();
    const formikk = useFormik({

        initialValues: {
            pid: "",
            pname: "",
            catg: "",
            cprice: "",
            sprice: "",
            quantity: ""

        },
        onSubmit: async (values) => {
            console.log(values)
            await Axios.post('http://localhost:9091/addproduct', values);
            alert("Product Added Successfully")
            navigate('/adminHome')
        }
    })

    return (
        <form onSubmit={formikk.handleSubmit}>
            <div className="box">
            <h2>ADD PRODUCTS</h2>
            <br />
            <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                noValidate
                autoComplete="off"
            >
                <TextField id="filled-basic" label="Product ID" variant="filled" type="text"
                    name="pid"
                    onChange={formikk.handleChange}
                    onBlur={formikk.handleBlur}
                    value={formikk.values.pid} />
            </Box>
            {formikk.touched.pid && formikk.errors.pid ? <div>{formikk.errors.pid}</div> : null}


            <br />
            <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                noValidate
                autoComplete="off"
            >
                <TextField id="filled-basic" label="Product Name" variant="filled" type="text"
                    name="pname"
                    onChange={formikk.handleChange}
                    onBlur={formikk.handleBlur}
                    value={formikk.values.pname} />
            </Box>
            {formikk.touched.pname && formikk.errors.pname ? <div>{formikk.errors.pname}</div> : null}
            
            <br />
            <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                noValidate
                autoComplete="off"
            >
                <TextField id="filled-basic" label="Category" variant="filled" type="text"
                    name="catg"
                    onChange={formikk.handleChange}
                    onBlur={formikk.handleBlur}
                    value={formikk.values.catg} />
            </Box>
            {formikk.touched.catg && formikk.errors.catg ? <div>{formikk.errors.catg}</div> : null}
            <br />
            <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                noValidate
                autoComplete="off"
            >
                <TextField id="filled-basic" label="Quantity" variant="filled" type="text"
                name="cprice"
                onChange={formikk.handleChange}
                onBlur={formikk.handleBlur}
                value={formikk.values.cprice} />
            </Box>

            {formikk.touched.cprice && formikk.errors.cprice ? <div>{formikk.errors.cprice}</div> : null}


            <br />

                 <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                noValidate
                autoComplete="off"
            >
                <TextField id="filled-basic" label="Cost Price" variant="filled" type="text"
                name="sprice"
                onChange={formikk.handleChange}
                onBlur={formikk.handleBlur}
                value={formikk.values.sprice}/>
            </Box>
            {formikk.touched.sprice && formikk.errors.sprice ? <div>{formikk.errors.sprice}</div> : null}
            <br />
                <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                noValidate
                autoComplete="off"
            >
                <TextField id="filled-basic" label="Selling Price" variant="filled" type="text"
                name="quantity"
                onChange={formikk.handleChange}
                onBlur={formikk.handleBlur}
                value={formikk.values.quantity}/>
            </Box>
            {formikk.touched.quantity && formikk.errors.quantity ? <div>{formikk.errors.quantity}</div> : null}
            <br />

            <Button variant="contained" type="submit">ADD PRODUCT</Button>
            </div>
        </form>
    )

}
export default AddProducts