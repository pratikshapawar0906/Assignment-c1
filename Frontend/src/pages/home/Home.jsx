import React from "react";
import {BrowserRouter as Router ,Routes ,Route} from 'react-router-dom'
import Hero from "../../components/hero/Hero";
import About from "../../components/digitalMastery/DigitalMastery";
import Service from "../../components/services/ServicesSection";
import Features from "../../components/features/FeaturesSection";
import Enquiries from "../../components/enquiries/Enquiries";
import PeaceOfMind from "../../components/peaceOfMind/PeaceOfMind";
import Testimonial from "../../components/testimonial/Testimonial";
import Contact from "../../components/contactForm/ContactForm";
import Layout from "./Layout";
import PageNotFound from "./PageNotFound";
import Login from "./login";
import SignUp from "./SignUp";

const Home = () => {
  return (
    <>
     <Router>
           <Routes>
            {/* parent routing */}
             <Route path='/' element={<Layout/>}>
                <Route index  element={<Hero/>}/>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/service' element={<Service/>}></Route>
                <Route path='/contact' element={<Contact/>}></Route>
                <Route path='/Landscape' element={<Features/>}></Route>
                <Route path='/work' element={<Enquiries/>}></Route>
                <Route path='/blog' element={<Testimonial/>}></Route>
                <Route path='/career' element={<PeaceOfMind/>}></Route>
                <Route path='/login'element={<Login/>}></Route>
                <Route path='/signup'element={<SignUp/>}></Route>
                
                <Route path='*' element={<PageNotFound/>}></Route>
              </Route>
            {/* ************************************************************ */}

              {/* <Route path='/admin'element={<Adminpanel/>}>
                  <Route path='/admin/login'element={<Login/>}></Route>
                  <Route path='/admin/forgotpassword' element={<Forgotpassword/>}></Route>
              </Route> */}
           </Routes>
      </Router>
       
    </>
  );
};

export default Home;
