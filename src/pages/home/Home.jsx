import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import DigitalMastery from "../../components/digitalMastery/DigitalMastery";
import Services from "../../components/services/Services";
import Features from "../../components/features/Features";
import Enquiries from "../../components/enquiries/Enquiries";
import PeaceOfMind from "../../components/peaceOfMind/PeaceOfMind";
import Testimonial from "../../components/testimonial/Testimonial";
import Faq from "../../components/faq/Faq";
import ContactForm from "../../components/contactForm/ContactForm";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <DigitalMastery />
      <Services />
      <Features />
      <Enquiries /> // there will be inq convo card inside this
      <PeaceOfMind />
      <Testimonial />
      <Faq />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Home;
