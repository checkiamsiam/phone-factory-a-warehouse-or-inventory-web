import React from "react";
import Slider from "react-slick";
import sliderimage1 from '../../images/slider-image-1.jpg'
import sliderimage2 from '../../images/slider-image-2.jpg'
import sliderimage3 from '../../images/slider-image-3.jpg'
import arrow from '../../images/arrow.png'
import { Link } from "react-router-dom";



const Banner = () => {
  const settings = {
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000
  };
  return (

    <div className="md:w-[95vw] mx-auto md:p-0 p-5 pt-0">
      <Slider {...settings}>
        <div>
          <img className="w-full md:h-[100vh]" src={sliderimage3} />

          <div className="lg:absolute lg:top-1/3 lg:ml-5 lg:w-1/4 z-10">
            <h1 className="text-2xl mb-5">Be Honest</h1>
            <p className="text-5xl p-5 border-t-8 border-t-orange-900 border-b-8 border-b-orange-900">A Believable Phone Hoarder</p>
            <Link to='/inventory' className=" flex justify-center bg-blue-600 mt-5 px-5 py-3 rounded-md cursor-pointer">Explore Inventory <img src={arrow} alt="" /></Link>
          </div>
        </div>

        <div>
          <img className="w-full md:h-[100vh]" src={sliderimage2} />
          <div className=" lg:absolute lg:top-1/4 lg:right-5 lg:w-1/4 z-10">
            <h1 className="text-2xl mb-5 lg:text-white">Be Lovely</h1>
            <p className="text-5xl lg:text-white p-5 border-t-8 border-t-orange-900 border-b-8 border-b-orange-900">Find the Best Phone brand for your lover</p>
            <Link to='/inventory' className=" md:text-white flex justify-center bg-blue-600 mt-5 px-5 py-3 rounded-md cursor-pointer">Let's Find<img src={arrow} alt="" /></Link>
          </div>

        </div>
        <div>
          <img className="w-full md:h-[100vh]" src={sliderimage1} />
          <div className="lg:absolute lg:top-1/3 lg:ml-5 lg:w-1/4 z-10">
            <h1 className="text-2xl mb-5">Be Modern</h1>
            <p className="text-5xl p-5 border-t-8 border-t-orange-900 border-b-8 border-b-orange-900">Modern Collection of Phones And Stationary</p>
            <Link to='/inventory' className=" flex justify-center bg-blue-600 mt-5 px-5 py-3 rounded-md cursor-pointer">Explore More <img src={arrow} alt="" /></Link>
          </div>
        </div>



      </Slider>
    </div>
  );
};

export default Banner;
