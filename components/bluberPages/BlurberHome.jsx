import React from 'react'

function BlurberHome() {
  return (
    <div>
      <div className="flex items-center realtive p-2 justify-between font-semibold text-2xl ">
        <div>
          Blurb<span className="text-[#C40505]">Jobs</span>
        </div>
        <div className="relative">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          {/* <span className='text-red-800 absolute top-12 text-4xl right-0'>.</span> */}
        </div>
      </div>
      <div>
        
        <form
          action=""
          method="get"
          className="pt-2 relative mx-auto text-gray-600 flex  md:justify-start items-start md:flex-auto"
        >
          <input
            className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 w-full md:w-4/12 rounded-lg text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Search for jobs"
          />
          <button
            type="submit"
            className="absolute left-1 opacity-50 top-0 mt-5 mr-4"
          >
            <svg
              className="text-gray-600 h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 56.966 56.966"
              style={{ enableBackground: "new 0 0 56.966 56.966" }}
              xmlSpace="preserve"
              width="512px"
              height="512px"
            >
              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
            </svg>
          </button>
        </form>


        <div>
          
        </div>




      </div>
    </div>
  );
}

export default BlurberHome