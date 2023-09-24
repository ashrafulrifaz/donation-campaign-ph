import { NavLink } from 'react-router-dom';
import Logo from '../../assets/Logo.png';
import './Header.css'


const Header = () => {
   return (
      <div className="max-w-6xl mx-auto">
         <div className="py-6 flex justify-between items-center">
            <div>
               <img src={Logo} alt="LOGO" className='w-4/6' />
            </div>
            <ul className='flex gap-7' id="nav">
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
         </div>
      </div>
   );
};

export default Header;