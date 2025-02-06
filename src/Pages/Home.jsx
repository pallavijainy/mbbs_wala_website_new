import React from "react";
import HeroSection from "../component/HeroSection";
import Partners from "../component/Partners";
import ConnectWithCommunity from "../component/ConnectWithCommunity";
import ProvenTrackRecord from "../component/ProvenTrackRecord";
import WhyChoose from "../component/WhyChoose";
import AdmissionSection from "../component/AdmissionSection";
import WorkProcess from "../component/WorkProcess";
import NewCollege from "../component/NewCollege";
import TestimonialSection from "../component/TestimonialSection";
import TestimonialCard from "../component/TestinomialCard";
import Gallery from "../component/Gallery";
import MedicalDegrees from "../component/MedicalDegrees";
import GetInTouch from "../component/GetInTouch";
import ContactUs from "../component/ContactUs";
import FAQ from "../component/FAQ";
import Footer from "../layout/Footer";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Partners />
      <ConnectWithCommunity />
      <ProvenTrackRecord />
      <WhyChoose />
      <AdmissionSection />
      <WorkProcess />
      <NewCollege />
      <TestimonialSection />
      <TestimonialCard />
      <Gallery />
      <MedicalDegrees
        heading={"Explore Programs"}
        subHeading={"Medical Degrees"}
        description="Let’s join our famous class, the knowledge provided will definitely be useful for you."
        redirectMore="/courses"
        redirect="/coursedetail"
      />
      <MedicalDegrees
        heading={"EXPLORE COLLEGES"}
        subHeading={"Medical Colleges"}
        description="let's join fantastic college"
        redirectMore="/institution"
        redirect="/institutiondetail"
      />
      <GetInTouch />
      <ContactUs />
      <FAQ />
    </>
  );
};

export default Home;
