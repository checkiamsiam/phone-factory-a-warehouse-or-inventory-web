import React from 'react';

const GalleryCard = ({ data }) => {
  return (
    <div className='w-3/4 '>
      <div className="flex justify-center md:h-[450px] h-[300px] overflow-hidden">
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
          <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
            <img className="transition duration-1000 rounded-t-lg hover:scale-110 " src={data?.img} alt="" />
          </a>
          <hr />
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">{data?.name}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;