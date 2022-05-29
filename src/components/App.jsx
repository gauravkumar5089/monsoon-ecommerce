import React from "react";
import Navbar from "./Navbar";
import Announcement from "./Announcement";
import Footer from "./Footer";
import Carousel from "./Carousel";

export default function App() {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Carousel />
      <Footer />
    </div>
  );
}
