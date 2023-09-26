import { useState } from "react";
import PropTypes from 'prop-types';
import './Banner.css'

const Banner = ({sendDataToItem}) => {
   const [value, setValue] = useState("")

   const handleFormSubmit = e => {
      e.preventDefault()
      sendDataToItem(value);
   }

   const handleFormValue = e => {
      setValue(e.target.value)
   }

   return (
      <div className="h-[85vh] flex items-center bg-slate-500 -mt-24" id="banner">
         <div className="text-center max-w-[85%] mx-auto">
            <h1 className="text-[#0B0B0B] text-3xl md:text-4xl lg:text-5xl font-bold">I Grow By Helping People In Need</h1>
            <div className="flex justify-center mt-10">
               <input onChange={handleFormValue} type="text" className="border border-gray-200 focus:outline-none border-r-0 rounded-s-md px-4 py-2.5 w-4/6 md:w-3/6 text-sm" placeholder="Search here...." />
               <button onClick={handleFormSubmit} className="rounded-e-md bg-[#FF444A] text-white px-5 py-2 text-sm">Search</button>
            </div>
         </div>
      </div>
   );
};

Banner.propTypes = {
   sendDataToItem: PropTypes.object.isRequired
}

export default Banner;