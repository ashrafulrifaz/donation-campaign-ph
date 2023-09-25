import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Item = ({item}) => {
   const {id, categoryImage, title, category, titleColor, categoryBackgroundColor, cardBackgroundColor} = item

   return (
      <Link to={`campaign/${id}`}>
         <div className="rounded-md cursor-pointer" style={{backgroundColor: `${cardBackgroundColor}`}}>
            <img src={categoryImage} alt="" className='w-full' />
            <div className='p-3'>
               <p style={{backgroundColor: `${categoryBackgroundColor}`, color: `${titleColor}`}} className={`text-sm font-medium py-0.5 px-2 inline-block rounded`}>{category}</p>
               <h2 style={{color: `${titleColor}`}} className='mt-1.5 font-semibold'>{title}</h2>
            </div>
         </div>
      </Link>
   );
};

Item.propTypes = {
   item: PropTypes.object.isRequired
}

export default Item;