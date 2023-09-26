import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/Logo.png';
import './Header.css'


const Header = () => {
   return (
      <div className="max-w-[85%] mx-auto bg-transparent">
         <div className="py-6 flex justify-between items-center">
            <div>
               <Link to="/"><img src={Logo} alt="LOGO" className='w-4/6' /></Link>
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