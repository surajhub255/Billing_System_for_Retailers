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
import './index.css'

export const ShowData=()=>{
    const [data, setData] = useState([])
useEffect(() => {
    const asynccall = async () => {
        await Axios.get('http://localhost:9091/createbill')
            .then((res) => setData(res.data))
            
    }
    const timer = setTimeout(
        () => { asynccall() }, 3000
    )
    return () => clearTimeout(timer)
}, data)
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
const formik = useFormik({
    initialValues: {
        pid: "",
        pname: "",
        catg: "",
        cprice: "",
        sprice: "",
        quantity: ""
    },
    onSubmit:(values)=>{
        console.log(data)
    }
})
return(
    <TableContainer component={Paper}>

    <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
            <TableRow>
                <StyledTableCell align="right">ID</StyledTableCell>
                <StyledTableCell align="right">Name</StyledTableCell>
                <StyledTableCell align="right">Category&nbsp;</StyledTableCell>
                <StyledTableCell align="right">Cost Price&nbsp;</StyledTableCell>
                <StyledTableCell align="right">Selling Price&nbsp;</StyledTableCell>
                <StyledTableCell align="right">Quantity&nbsp;</StyledTableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {data.map((product, index) => (
                <StyledTableRow key={index}>
                    <StyledTableCell component="th" scope="data">{product.pid}</StyledTableCell>
                    <StyledTableCell align="right">{product.pname}</StyledTableCell>
                    <StyledTableCell align="right">{product.catg}</StyledTableCell>
                    <StyledTableCell align="right">{product.cprice}</StyledTableCell>
                    <StyledTableCell align="right">{product.sprice}</StyledTableCell>
                    <StyledTableCell align="right">{product.quantity}</StyledTableCell>
                </StyledTableRow>
            ))}
        </TableBody>
    </Table>
</TableContainer>
)}