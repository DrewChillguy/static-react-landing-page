import React from "react";
import Navbar from "./components/navbar/navbar";
import Banner from "./components/banner/banner";
import About from "./components/about/about";
import Work from "./components/how-it-work/work";
import Review from "./components/testimonial/review";
import Question from "./components/email/question";
import Footer from "./components/footer/footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Work />
      <Review />
      <Question />
      <Footer />
    </>
  );
};

export default App;
