// import {React,useEffect }from "react";
// import {FormikProvider, useFormik} from 'formik'
// import { useNavigate } from "react-router-dom";
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import MenuItem from '@mui/material/MenuItem';
// import Axios from "axios"
// import './signup.css'


// const UpdateProduct = () =>{

//     const navigate = useNavigate()

//     const handleUpdate = async () => {
//         try {
//           await Axios.put('http://localhost:9091/updateproduct', {
//             quantity: formik.values.quantity,
//             pid: formik.values.pid,
//             sprice: formik.values.sprice,
//         });
//           alert('Product updated successfully!');
//           navigate('/adminHome')
//         } catch (error) {
//           console.error('update failed:', error.message);
//           alert('Update failed. Please try again.');
//         }
//       };

//     const formik = useFormik({
//         initialValues : {
//            pid:"",
//            quantity:"",
//            sprice:""
//         },
//         onSubmit : (values) =>{
//             console.log(values)
//         }
//     })
//     return(
//         <div className="box">
//             <h1>Update Products</h1>
//             <form>
//                 <br />
//                 <Box
//                 component="form"
//                 sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
//                 noValidate
//                 autoComplete="off"
//             >
//                 <TextField id="filled-basic" label="Product ID" variant="filled" type="text"
//                    name="pid" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.pid} />
//             </Box>
//                 {formik.touched.pid && formik.errors.pid ?<div>{formik.errors.pid}</div> : null}
//                 <Box
//                 component="form"
//                 sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
//                 noValidate
//                 autoComplete="off"
//             >
//                 <TextField id="filled-basic" label="Quantity" variant="filled" type="text"
//                     name="quantity" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.quantity} />
//             </Box>
//                 {formik.touched.quantity && formik.errors.quantity ?<div>{formik.errors.quantity}</div> : null}
//                 <Box
//                 component="form"
//                 sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
//                 noValidate
//                 autoComplete="off"
//             >
//                 <TextField id="filled-basic" label="Selling Price" variant="filled" type="text"
//                      name="sprice" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.sprice} />
//             </Box>
//                 {formik.touched.sprice && formik.errors.sprice ?<div>{formik.errors.sprice}</div> : null}

//                 <Button variant="contained" onClick={handleUpdate} type="submit">Submit</Button>
//             </form>
//         </div>
//     )
// }
// export {UpdateProduct}

import {React,useEffect, useState }from "react";
import {FormikProvider, useFormik} from 'formik'
import { useNavigate } from "react-router-dom";
import Axios from "axios"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
 
const UpdateProduct = () =>{
 
    const navigate = useNavigate()
 
    const [product,setProduct]=useState({})
    const [existing,setExisting] =useState(false)
    const handleUpdate = async () => {
        try {
          await Axios.put('http://localhost:9091/updateproduct', {
            pid: formik.values.pid,
            sprice: formik.values.sprice,
        });
          alert('Product updated successfully!');
          navigate('/adminHome')
        } catch (error) {
          console.error('update failed:', error.message);
          alert('Update failed. Please try again.');
        }
      };
 
 
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
 
    const formik = useFormik({
        initialValues : {
           pid:"",
           pname:"",
           cprice:"",
           esprice:"",
           sprice:""
        },
        onSubmit : (values) =>{
            console.log(values)
        }
    })
    return(
        <div>
            <h1>Update Products</h1>
            <form onSubmit={formik.handleSubmit}>
             <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField label="Product Id" placeholder='Product Id' variant="filled" type="text" name="pid" id="pid" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.pid} />
            </Box>
            <br/>
            <Button type="reset" variant='contained' onClick={handleGetProduct}>Get Product</Button><br/>
                <br />
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
                <TextField label="Product Name" placeholder='Product Name' variant="filled" type="text" name="pname" id="pname" onChange={formik.handleChange} onBlur={formik.handleBlur} value={product.pname} />
            </Box>
                <br />
                {formik.touched.pname && formik.errors.pname ?<div>{formik.errors.pname}</div> : null}

                <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField label="Cost Price" placeholder='Cost Price' variant="filled" type="text" name="cprice" id="cprice" onChange={formik.handleChange} onBlur={formik.handleBlur} value={product.cprice} />
            </Box>
                {formik.touched.cprice && formik.errors.cprice ?<div>{formik.errors.cprice}</div> : null}
                <br /> 
                <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField label="Existing Selling Price" placeholder='Existing Selling Price' variant="filled" type="text" name="esprice" id="esprice" onChange={formik.handleChange} onBlur={formik.handleBlur} value={product.sprice} />
            </Box>
                {formik.touched.esprice && formik.errors.esprice ?<div>{formik.errors.esprice}</div> : null}
                <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField label="New Selling Price" placeholder='Selling Price' variant="filled" type="text" name="sprice" id="sprice" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.sprice} />
            </Box>
                {formik.touched.sprice && formik.errors.sprice ?<div>{formik.errors.sprice}</div> : null}
 
                <Button variant="contained" onClick={handleUpdate} type="submit">Submit</Button>
              </div>
             ) }
            </form>
        </div>
    )
}
export {UpdateProduct}