import React, { useEffect } from "react";
import Disclaimer from "./components/Disclaimer/Disclaimer";
import Buildings from "./components/Buildings/Buildings";
import Schedule from "./components/Schedule/Schedule";

import 'bootstrap/dist/css/bootstrap.min.css'
import { useDispatch } from "react-redux";
import BookingForm from "./components/BookingForm/BookingForm";
import {
   BrowserRouter as Router,
   Route,
   Routes,
   Link,
   useNavigate,
} from "react-router-dom";
import Navbar from "./components/Navbarr/Navbarr";
import { getBookings } from "./actions/bookings";
import Home from "./components/Home/Home";
import Register from "./components/Register/Register";
import LoginUser from "./components/Login/LoginUser";
import LoginAdmin from "./components/Login/LoginAdmin";
import AdminHomePage from "./components/AdminHome/AdminHome";
import Status from "./components/Status/Status";
import MyBooking from "./components/MyBooking/MyBooking";
import Contact from "./components/Contact/Contact";
import PastContact from "./components/Contact/PastContact";
import AdminContact from "./components/AdminContact/AdminContact";


function App(){
   const[curid,setId] = React.useState("0");
   const [user,setUser] = React.useState({
      emailId : "",
      auth : 0,
      track : "",
      building : "",
      type : "",
   });
   // const navigate = useNavigate();
   // const dispatch = useDispatch();
   // useEffect(()=>{
   //    dispatch(getBookings("1"));
   // },[dispatch])
   return (

       <Router> 
         {/* <Login user={user}/> */}
         <div>
            <Routes>
               <Route path = "/" element={
                     <Home user={user} setUser={setUser}/> 
                     } />

               <Route path = "/user/login" element= {
                     <LoginUser user = {user} setUser={setUser}/>
                     } />

               <Route path = "/user/register" element= {
                     <Register user={user} setUser={setUser}/>
                     } />

               <Route path = "/admin/login" element= {
                     <LoginAdmin user = {user} setUser={setUser}/>
                     } />
               <Route path = "/admin/:emailId/:track" element = {
                  <AdminHomePage user = {user} setUser={setUser}/>
                  }  />

               <Route path = "/admin/:emailId/:track/status" element = {<Status setUser={setUser} user={user} />} />

               {/* <Route path = "/Register" element = {<Register user = {user} />} /> */}
               <Route path="/user/:emailId/:track" element={
                     <Disclaimer user = {user} setUser={setUser}/>
                     } />

               <Route path="/user/:emailId/:track/mybooking" element={
                     <MyBooking user = {user} setUser={setUser}/>
                     } />

               <Route path="/user/:emailId/:track/pastContact" element={
                     <PastContact user = {user} setUser={setUser}/>
                     } />
               <Route path="/admin/:emailId/:track/contact" element={
                     <AdminContact user = {user} setUser={setUser}/>
                     } />

               <Route path="/user/:emailId/:track/book" element={
                  <>
                     <Buildings  user = {user} setUser = {setUser} buttonValue = "book"/>
                  </>
               } />
               <Route path= "user/:emailId/:track/book/:id" element={
                  <>
                     <BookingForm user = {user} setUser={setUser}/>
                  </>
               } />

               <Route path="/user/:emailId/:track/view"  element={
                  <>
                  <Buildings  user = {user} setUser = {setUser} buttonValue = "view"/>

                  </>}
                  />
               <Route path="/admin/:emailId/:track/view"  element={
                  <>
                  <Buildings  user = {user} setUser = {setUser} buttonValue = "view"/>

                  </>}
                  />
               <Route path="user/:emailId/:track/view/:id" element={
                  <>
                     <Schedule user = {user} setUser={setUser}/>
                  </>
               }/>
               <Route path="admin/:emailId/:track/view/:id" element={
                  <>
                     <Schedule user = {user} setUser={setUser}/>
                  </>
               }/>
               <Route path="user/:emailId/:track/contact" element={
                  <>
                     <Contact user = {user} setUser={setUser}/>
                  </>
               }/>
               
            </Routes>
         </div>
      </Router>
   );
}

export default App;