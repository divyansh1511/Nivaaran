import React from "react";
import Header from "../Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Part1 from "../Components/Part1";
import Part2 from "../Components/Part2";
import Footer from "../Components/Footer";

function Home() {
  return (
    <div>
      <Header />
      <Part1 ab="about" />
      <Part2 />
      <Footer />
    </div>
  );
}

export default Home;
