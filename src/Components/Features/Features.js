// Features
import React from 'react';
import './Features.css';
import feaimg from "../Images/feature-img-1.png"
import feaimg2 from "../Images/feature-img-2.png"
import feaimg3 from "../Images/feature-img-3.png"
export default function Features() {
  return (
    <section className="features" id="features">
      <div className="content">
        <h1 className="heading">
          our
          {' '}
          <span>features</span>
        </h1>
        <div className="box-container">
          <div className="box">
            <img src={feaimg} alt="" />
            <h3>fresh and organic</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit, quis!</p>
            <a href="/" className="btn">read more</a>
          </div>
          <div className="box">
            <img src={feaimg2} alt="" />
            <h3>free delivery</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit, quis!</p>
            <a href="/" className="btn">read more</a>
          </div>
          <div className="box">
            <img src={feaimg3} alt="" />
            <h3>easy payment</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit, quis!</p>
            <a href="/" className="btn">read more</a>
          </div>
        </div>
      </div>
    </section>
  );
}
