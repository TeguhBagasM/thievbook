import React from "react";
import "./About.css";
import aboutImg from "../../images/about.jpg";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
        </div>

        <div className="about-content grid">
          <div className="about-img">
            <img src={aboutImg} alt="About ThievBook" />
          </div>
          <div className="about-text">
            <h2 className="about-title fs-26 ls-1">About ThievBook</h2>
            <p className="fs-17">
              Welcome to ThievBook, your ultimate online book library. Our platform provides access to
              a vast collection of books across various genres and topics. Whether you're looking for
              the latest bestsellers, classic literature, or educational materials, ThievBook has
              something for everyone.
            </p>
            <p className="fs-17">
              Our mission is to make reading more accessible and enjoyable for everyone. We believe the
              power of books to educate, inspire and entertain. Start exploring the endless
              possibilities of the written word.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
