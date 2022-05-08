import React from 'react';
import './contactUs.css'
import { BiLocationPlus } from 'react-icons/bi';
import { ImMail2 } from 'react-icons/im';
import { BiDoorOpen } from 'react-icons/bi';

const Contact = () => {
  return (
    <section className="contact-page-sec my-20">
      <h1 className='text-blue-400 text-5xl mb-5 text-center'><span className='border-b-2 border-dashed border-blue-800'>Contact Us</span></h1>
      <div className="container mx-auto">
        <div className="  md:flex justify-between gap-2  mx-10">
          <div className="col-md-4">
            <div className="contact-info">
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <i className="fas fa-map-marked"></i>
                </div>
                <div className="contact-info-text">
                  <h2 className='flex items-center justify-center'><BiLocationPlus/>address</h2>
                  <span>Kajirgaon , Chadnimath</span>
                  <span>Jatrabari , Dhaka</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="contact-info">
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-info-text">
                  <h2 className='flex items-center justify-center'><ImMail2/> &nbsp;E-mail</h2>
                  <span>issiam02415@yahoo.com</span>
                  <span>shaman02415@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="contact-info">
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="contact-info-text">
                  <h2 className='flex items-center justify-center'><BiDoorOpen/> Warehouse Open At</h2>
                  <span>Mon - Thu  9:00 am - 4.00 pm</span>
                  <span>Thu - Mon  10.00 pm - 5.00 pm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex justify-around ">
          <div className="md:w-4/6 mx-5">
            <div className="contact-page-form" method="post">
              <h2 className='text-blue-400'>Get in Touch</h2>
              <form action="contact-mail.php" method="post">
                <div className="row">
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="single-input-field">
                      <input type="text" placeholder="Your Name" name="name" />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="single-input-field">
                      <input type="email" placeholder="E-mail" name="email" required />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="single-input-field">
                      <input type="text" placeholder="Phone Number" name="phone" />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="single-input-field">
                      <input type="text" placeholder="Subject" name="subject" />
                    </div>
                  </div>
                  <div className="col-md-12 message-input">
                    <div className="single-input-field">
                      <textarea placeholder="Write Your Message" name="message"></textarea>
                    </div>
                  </div>
                  <div className="single-input-fieldsbtn cursor-pointer">
                    <input type="submit" value="Send Now" />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="md:w-2/6  mx-5">
            <div className="contact-page-map">
              <iframe width="100%" height="450" id="gmap_canvas" src="https://maps.google.com/maps?q=jatrabari&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;