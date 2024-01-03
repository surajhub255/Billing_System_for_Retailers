import React from "react";
import { Link } from "react-router-dom";
import { Button } from '@mui/material'
import Axios from "axios"
import { faDisplay } from "@fortawesome/free-solid-svg-icons";
const AdminHome=()=>{

    
    
    return(
        <div>
            <h3 >Admin Home</h3>
            <br />
            <br />
            <div>
               <Link to="/signUp"><Button variant="contained">Add Staff Member </Button></Link>&nbsp;&nbsp;
               <br />
               <br />
              <Link to="/addproduct"><Button variant="contained"> Add Products in your Shop</Button></Link>&nbsp;&nbsp;
              <br />
              <br />
            <Link to="/updateproduct"><Button variant="contained"> Update Product</Button></Link>&nbsp;&nbsp;
            <br />
              <br />
            <Link to="/showProducts"><Button variant="contained"> Show Products in your Shop</Button></Link>&nbsp;&nbsp;
            <br />
              <br />
            <Link to="/addStocks"><Button variant="contained">Add Stocks</Button></Link>&nbsp;&nbsp;
            </div>

            <br />
            
        </div>
    )

}

export default AdminHome