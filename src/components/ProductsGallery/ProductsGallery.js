import React from 'react';
import Slider from "react-slick";
import useProducts from '../../hooks/useProducts';
import GalleryCard from '../GalleryCard/GalleryCard';

const ProductsGallery = () => {
  const [products] = useProducts();
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "100px",
    slidesToShow: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div>
      <h1 className='text-5xl text-blue-600 my-5 text-center '><span className='border-b-4 border-blue-300 border-dotted '>Products Image Gallery</span></h1>
      <Slider {...settings}>
        {products.map(product => <div className='my-5' key={product._id}> <GalleryCard data={product}></GalleryCard> </div>)}

      </Slider>
    </div>
  );
};

export default ProductsGallery;