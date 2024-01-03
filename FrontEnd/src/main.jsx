import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Login from './login.jsx'
import AdminHome from './adminHome.jsx'
import Signup from './signStaff.jsx'
import { BrowserRouter as Router,Routes,Route, Link } from "react-router-dom";
import { Data } from './Data.jsx'
import AddProducts from './addProducts.jsx'
import { UpdateProduct } from './UpdateProduct.jsx'
import { ShowData } from './showAllProducts.jsx'
import { AddStocks } from './src/AddStocks.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   {/* <App/> */}
   {/* <Login/> */}
   {/* <GeneratedBill/> */}
   {/* <AdminHome/> */}
   {/* <Signup/> */}
  

   <Router>
    
    <Routes>

      <Route path="/" element={<Login/>}/>
      <Route path="/adminHome" element={<AdminHome/>}/>
      <Route path="/signUp" element={<Signup/>}/>
      <Route path="/makeBill" element={<Data/>}/>
      <Route path="/addproduct" element={<AddProducts/>}/>
      <Route path="/updateproduct" element={<UpdateProduct/>}/>
      <Route path="/showProducts" element={<ShowData/>}/>
      <Route path="/addstocks" element={<AddStocks/>}/>
    </Routes>

  </Router>
  </React.StrictMode>
)
