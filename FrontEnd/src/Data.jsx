import { useState, React, useEffect } from 'react'
import { Formik, useFormik } from 'formik'
import Axios from "axios"
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Autocomplete } from '@mui/material';
import './table.css'


export const Data = () => {
    const [data, setData] = useState([])
    const [dataToSend, setDataToSend] = useState({})
    const [count, setCount] = useState(0)
    const [value, setValue] = useState([])
    const [existing,setExisting]=useState(false)
    var sendItemsList = "";
    var total = 0.0;


    useEffect(() => {
        const asynccall = async () => {
            await Axios.get('http://localhost:9091/createbill')
                .then((res) => setValue(res.data))

        }
        const timer = setTimeout(
            () => { asynccall() }, 3000
        )
        return () => clearTimeout(timer)
    }, value)
    const formik = useFormik({
        initialValues: {
            pid: "",
            quantity: "",
            email: "",
            pname: ""
        },
        onSubmit: (values) => {
            console.log(data)
            dataToSend.email = values.email
            console.log(dataToSend)
            for (let i = 0; i < dataToSend.length; i++) {
                sendItemsList = sendItemsList + dataToSend[i].pid + ":" + dataToSend[i].quantity + ":" + dataToSend[i].sprice + ";"
                total = total + dataToSend[i].quantity * dataToSend[i].sprice;
            }
            console.log(sendItemsList);

            let obj = {
                email: dataToSend.email,
                itemList: sendItemsList,
                amount: total
            }
            console.log(obj)
            const asynccall1 = async () => {
                await Axios.post('http://localhost:9091/bill', obj)
                    .then((res) => console.log(res.data)).then(alert("Thank you for Purchasing !!!"))
            }
            asynccall1()
        }
    })

    const [item,setItem]=useState([])
    const getproducts = () =>{
            useEffect(()=>{
            const asynccall = async () => {
                await Axios.get(`http://localhost:9091/find/${formik.values.pname}`)
                    .then((res) => setItem(res.data)).then(console.log("hello")).then(console.log(item))

                setExisting(true)
    
            }
            const timer = setTimeout(
                () => { asynccall() }, 1000
            )
            return () => clearTimeout(timer)
            })
    }

    const AddData = (values) => {
        console.log(values.pid)
        setCount((count) => count + 1)
        let newData = [...data]
        for (const element of value) {
            if (values.pid == element.pid) {
                newData.push(element)
            }
        }
        console.log("values.quantity")
        console.log(values.quantity)
        newData[count].quantity = values.quantity
        let k = newData[count].quantity * newData[count].sprice
        newData[count].totprice = k
        setData(newData)
        console.log(values.quantity)
        console.log(newData)
        setDataToSend(newData)
        showData()
    }
    const deleteData = (ind) => {
        for (let i = ind; i < data.length - 1; i++) {
            let sendItemsList = data[i]
            data[i] = data[i + 1]
            data[i + 1] = sendItemsList
        }
        data.pop()
        console.log(data)
        setCount((count) => count - 1)
        showData()
    }
    const showData = () => {
        return (
            <TableContainer component={Paper}>

                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="right">ID</StyledTableCell>
                            <StyledTableCell align="right">Name</StyledTableCell>
                            <StyledTableCell align="right">Price&nbsp;</StyledTableCell>
                            <StyledTableCell align="right">Quantity&nbsp;</StyledTableCell>
                            <StyledTableCell align="right">Total Price&nbsp;</StyledTableCell>
                            <StyledTableCell align="right">Edit&nbsp;</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((product, index) => (
                            <StyledTableRow key={index}>
                                <StyledTableCell component="th" scope="data">
                                    {product.pid}
                                </StyledTableCell>
                                <StyledTableCell align="right">{product.pname}</StyledTableCell>
                                <StyledTableCell align="right">{product.sprice}</StyledTableCell>
                                <StyledTableCell align="right">{product.quantity}</StyledTableCell>
                                <StyledTableCell align="right">{product.totprice}</StyledTableCell>
                                <StyledTableCell align="right"><button type='reset' onClick={() => { deleteData(index) }} >Delete</button></StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));
    return (

        <form onSubmit={formik.handleSubmit}>
            <h3>Customer Information</h3>
            <div className='try'>

                <div>
                    <div className='sidebyside'>

                        <br />

                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '52ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField label="Enter Mobile Number" placeholder='Mobile Number' variant="filled" type="mobile" name="email" id="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
                        </Box>
                    </div>

                    <h3>Search Product</h3>
                    <div className='try'>

                        <div>
                            <div className='sidebyside'>

                                <br />

                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1, width: '52ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField label="Enter Product" placeholder='search Product' variant="filled" type="text" name="pname" id="pname" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.pname} />
                                </Box>
                                <br />

                                <Button type='reset' variant="contained" onClick={getproducts()} >Search</Button>
                            </div>
                            <br />

                            {existing && (
                                <div>

<TableContainer component={Paper}>

<Table sx={{ minWidth: 700 }} aria-label="customized table">
    <TableHead>
        <TableRow>
            <StyledTableCell align="right">ID</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">Price&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Quantity&nbsp;</StyledTableCell>
        </TableRow>
    </TableHead>
    <TableBody>
        {item.map((product, index) => (
            <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="data">
                    {product.pid}
                </StyledTableCell>
                <StyledTableCell align="right">{product.pname}</StyledTableCell>
                <StyledTableCell align="right">{product.sprice}</StyledTableCell>
                <StyledTableCell align="right">{product.quantity}</StyledTableCell>
                
            </StyledTableRow>
        ))}
    </TableBody>
</Table>
</TableContainer>

                                </div>
                            )
                            }

                           



                            <h3>Add Products</h3>
                            <div className='sidebyside'>
                                <br />
                                <br />


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
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1, width: '25ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField label="Enter Quantity" variant="filled" type="text" placeholder='Enter Quantity' onChange={formik.handleChange} onBlur={formik.handleBlur} name="quantity" value={formik.values.quantity} />
                                </Box>
                            </div>
                            <br />
                            <Button type='reset' variant="contained" onClick={() => { AddData(formik.values); formik.values.pid = ""; formik.values.quantity = ""; }} >Add </Button>
                            <br />
                            <br />
                        </div>
                        <br />
                        <br />
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell align="right">ID</StyledTableCell>
                                        <StyledTableCell align="right">Name</StyledTableCell>
                                        <StyledTableCell align="right">Price&nbsp;</StyledTableCell>
                                        <StyledTableCell align="right">Quantity&nbsp;</StyledTableCell>
                                        <StyledTableCell align="right">Total Price&nbsp;</StyledTableCell>
                                        <StyledTableCell align="right">Edit&nbsp;</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {data.map((product, index) => (
                                        <StyledTableRow key={index}>
                                            <StyledTableCell component="th" scope="data">
                                                {product.pid}
                                            </StyledTableCell>
                                            <StyledTableCell align="right">{product.pname}</StyledTableCell>
                                            <StyledTableCell align="right">{product.sprice}</StyledTableCell>
                                            <StyledTableCell align="right">{product.quantity}</StyledTableCell>
                                            <StyledTableCell align="right">{product.totprice}</StyledTableCell>
                                            <StyledTableCell align="right"><Button type='reset' variant='outlined' onClick={() => { deleteData(index) }} >Delete</Button></StyledTableCell>
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <br />
                        <br />
                        <br />
                        <Button type='submit' variant="contained">PAY</Button>
                    </div>

                </div>
                </div>
                </form>
                )
       
}



