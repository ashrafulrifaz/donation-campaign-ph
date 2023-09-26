import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/Logo.png';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';


const Header = () => {
   const [hidden, setHidden] = useState(true)

   return (
      <div className="max-w-[85%] mx-auto bg-transparent">
         <div className="py-6 flex justify-between items-center">
            <div>
               <Link to="/"><img src={Logo} alt="LOGO" className='w-4/6' /></Link>
            </div>
            {/* Menu for mobile devices */}
            <ul className={`z-10 flex flex-col md:flex-row gap-1.5 md:gap-5 lg:gap-7 shadow absolute end-8 top-[12%] bg-white p-3 rounded-xl ${hidden ? 'hidden' : 'block'}`} id="nav">
               <li className='hover:bg-slate-100 focus:bg-transparent py-1 p-2 rounded-lg'>
                  <NavLink to="/" className="text-[#0B0B0B]">Home</NavLink>
               </li>
               <li className='hover:bg-slate-100 focus:bg-transparent py-1 p-2 rounded-lg'>
                  <NavLink to="/donation">Donation</NavLink>
               </li>
               <li className='hover:bg-slate-100 focus:bg-transparent py-1 p-2 rounded-lg'>
                  <NavLink to="/statistics">Statistics</NavLink>
               </li>
            </ul>
            {/* Menu for tablet and laptop devices */}
            <ul className="hidden md:flex gap-7" id="nav">
               <li>
                  <NavLink to="/" className="text-[#0B0B0B]">Home</NavLink>
               </li>
               <li>
                  <NavLink to="/donation">Donation</NavLink>
               </li>
               <li>
                  <NavLink to="/statistics">Statistics</NavLink>
               </li>
            </ul>
            <FontAwesomeIcon style={{width: '20px'}} icon={faBars} className='cursor-pointer md:hidden' onClick={() => setHidden(!hidden)} />
         </div>            
      </div>
   );
};

export default Header;