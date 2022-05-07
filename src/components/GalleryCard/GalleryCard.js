import React from 'react';

const GalleryCard = ({ data }) => {
  return (
    <div className='w-4/5 ' data-aos="fade-up"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine">
      <div className="flex justify-center md:h-[450px] h-[300px] overflow-hidden rounded-xl shadow-sm">
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
          <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
            <img className="transition duration-1000 rounded-t-lg hover:scale-110 md:h-4/5 h-[200px] " src={data?.img} alt="" />
          </a>
          <hr />
          <div className="p-6">
            <h5 className="text-gray-900 md:text-xl font-medium mb-2">{data?.name}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;