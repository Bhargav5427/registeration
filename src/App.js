import React, { useEffect } from 'react'
import { Routes, Route } from "react-router-dom";

import AdminNav from './Components/Admin/header/AdminNav';
import Home from './Components/Admin/pages/Home';
import Contact from './Components/Admin/pages/Contact';
import About from './Components/Admin/pages/About';

import UserHome from './Components/User/pages/UserHome';
import UserContact from './Components/User/pages/Contact';
import UserAbout from './Components/User/pages/About';
import Usernav from './Components/User/header/Usernav';
import { useDispatch } from 'react-redux';
import { GET_USER_PENDING } from './redux-saga/User/action/Action';


const App = () => {

  let dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: GET_USER_PENDING })
  }, [])

  let root = "admin"; // You can replace this with your actual logic to determine if the user is an admin or user
  let routes;

  if (root === "admin") {
    routes = (
      <>
        <AdminNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </>
    );
  } else if (root === "user") {
    routes = (
      <>
        <Usernav />
        <Routes>
          <Route path="/" element={<UserHome />} />
          <Route path="/user-contact" element={<UserContact />} />
          <Route path="/user-about" element={<UserAbout />} />
        </Routes>
      </>
    );
  } else {
    routes = <h1>Not Found</h1>;
  }

  return routes;
}


export default App