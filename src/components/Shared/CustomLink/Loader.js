import React from 'react';

const Loader = () => {
  return (
    <div className='w-[100vw] h-[100vh] flex items-center justify-center'>
      <button type="button" class="bg-indigo-300 py-4 px-10 rounded text-white" disabled>
      loading...
    </button>
    </div>
  );
};

export default Loader;