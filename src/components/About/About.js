import React from 'react';
import myProfile from '../../images/my-profile.png'
import './About.css'

const About = () => {
  return (
    <section className="about mx-2" id="about">
      <div className="container mx-auto">
        <div className="heading text-center">
          <h2>About
            <span>&nbsp;Me</span></h2>
          <p>This Page is not related to this website. this is about me
            <br />
            As a front-end web developer
          </p>
        </div>
        <div className="md:flex gap-2">
          <div className="md:w-1/2">
            <img src={myProfile} alt="about" className="img-fluid" width="100%" />
          </div>
          <div className="md:w-1/2 mx-5 my-auto">
            <h3>My self <a href="https://www.linkedin.com/in/checkiamsiam/" className='text-red-400'>Sheikh Shahariar Siam</a></h3>
            <p>I am a Junior front end web application developer. i know react Js well and literally know express Js (Node js frame-work) My others skill is</p>
            <div className="row">
              <div className="col-md-6">
                <h4>
                  <i className="far fa-star"></i>Awesome Design</h4>
              </div>
              <div className="col-md-6">
                <h4>
                  <i className="far fa-star"></i>
                  Creative Idia</h4>
              </div>
              <div className="col-md-6">
                <h4>
                  <i className="far fa-star"></i>Css frame-Work</h4>
              </div>
              <div className="col-md-6">
                <h4>
                  <i className="far fa-star"></i>
                  Javascript</h4>
              </div>
              <div className="col-md-6">
                <h4>
                  <i className="far fa-star"></i>Awesome Responsive  Design</h4>
              </div>
              <div className="col-md-6">
                <h4>
                  <i className="far fa-star"></i>
                  Tricky user of npm packages</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default About;