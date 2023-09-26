import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Donation = ({item}) => {
   const {id, title, donationImage, categoryImage, cardBackgroundColor, categoryBackgroundColor, titleColor, category, price} = item

   return (
      <div className='flex flex-col md:flex-row rounded-md'>
         <img src={donationImage} alt="Donation" className='w-2/6 md:block hidden h-auto' />
         <img src={categoryImage} alt="Donation" className='w-full md:hidden h-auto' />
         <div className="w-full md:w-4/6 p-4 items-center flex rounded-b-md md:rounded-e-md" style={{backgroundColor: `${cardBackgroundColor}`}}>
            <div>
               <p style={{backgroundColor: `${categoryBackgroundColor}`, color: `${titleColor}`}} className={`text-sm font-medium py-0.5 px-2 inline-block rounded`}>{category}</p>
               <h2 className='mt-1.5 font-semibold text-[#0B0B0B] text-lg'>{title}</h2>
               <p style={{color: `${titleColor}`}} className='font-semibold text-[15px]'>${price}</p>
               <Link to={`/campaign/${id}`}>
                  <button style={{backgroundColor: `${titleColor}`}} className='text-white text-[15px] font-medium py-1.5 px-4 rounded mt-2.5'>View Details</button>
               </Link>
            </div>
         </div>
      </div>
   );
};

Donation.propTypes = {
   item: PropTypes.object.isRequired
}

export default Donation