import {React,useEffect, useState }from "react";
import {FormikProvider, useFormik} from 'formik'
import { useNavigate } from "react-router-dom";
import {Button} from '@mui/material'
import Axios from "axios"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
 
 
const AddStocks = () =>{
 
    const navigate = useNavigate()
 
    const [existing,setExisting] =useState(false);
    const [product,setProduct] =useState({})
 
    const formik = useFormik({
        initialValues : {
           pid:"",
           pname:"",
           equantity:"",
           quantity:"",
        },
        onSubmit : (values) =>{
            console.log(values)
            Axios.put('http://localhost:9091/updatequantity',{
                pid : values.pid,
                quantity: values.quantity
            }).then((res)=>{
                if(res.data==true){
                    alert("Stocks added Successfully")
                }
                else{
                    alert("Not")
                }
            })
        }
    })
 
    const handleGetProduct = async () => {
        try {
            const response = await Axios.get(`http://localhost:9091/getproduct/${formik.values.pid}`);
            setProduct(response.data)
            console.log(product)
       
            setExisting(true);
            } catch (error) {
            console.error('Error fetching product:', error.message);
            // Handle error as needed
            }
        };
 
 
 
    return(
        <div>
            <h1>Add Stocks</h1>
            <form onSubmit={formik.handleSubmit}>
             <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField label="Enter the Product ID" variant="filled" id="pid" placeholder='Enter the Product ID' type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} name="pid" value={formik.values.pid} />
            </Box>
            <br/>
            <Button type="reset" variant="contained" onClick={handleGetProduct}>Get Product</Button><br/>
 
            <br/>
               
               {existing && (
                 <div>
                <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField label="Product Name" variant="filled" id="quant" placeholder='Product Name' type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} name="quant" value={product.pname} />
            </Box>
            <br/>
                {formik.touched.pname && formik.errors.pname ?<div>{formik.errors.pname}</div> : null}
                 <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField label="Current Quantity" variant="filled" id="quant" placeholder='Current Quantity' type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} name="quant" value={product.quantity} />
            </Box>
                {formik.touched.quant && formik.errors.quant ?<div>{formik.errors.quant}</div> : null}
                <br />
                <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField label="New Quantity" variant="filled" id="quantity" placeholder='New Quantity' type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} name="quantity" value={formik.values.quantity} />
            </Box>
                {formik.touched.quantity && formik.errors.quantity ?<div>{formik.errors.quantity}</div> : null}
{/*
                <label htmlFor="quantity">Add Quantity</label>
                <select
                 name="quantity"
                 labelId="quantity"
                 id="quantity"
                  value={formik.values.quantity}
                  label="quantity"
                 onChange={formik.handleChange}
                >
                 <option value={10}>10</option>
                 <option value={20}>20</option>
                 <option value={30}>30</option>
                 </select> */}
       
 
                <Button variant="contained" type="submit">Submit</Button>
                </div>
               )}
            </form>
        </div>
    )
}
export {AddStocks}