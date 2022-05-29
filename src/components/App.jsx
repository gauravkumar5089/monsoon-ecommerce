import React from "react";
import Navbar from "./Navbar";
import Announcement from "./Announcement";
import Footer from "./Footer";
import Carousel from "./Carousel";
import Login from "./Login";


export default function App() {
  return (
    <div>
      <Login />
      <Announcement />
      <Navbar />
      <Carousel />
      <Footer />
    </div>
  );
}
