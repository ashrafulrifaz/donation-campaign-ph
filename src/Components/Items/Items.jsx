import { useEffect, useState } from "react";
import Item from "../Item/Item";
import PropTypes from 'prop-types';

const Items = ({data}) => {
   const [items, setItems] = useState([])

   useEffect(() => {
      fetch('https://ashrafulrifaz.github.io/donation-campaign-data/data.json')
         .then(res => res.json())
         .then(data => setItems(data))
   },[])

   const healthCategory = items.filter(item => item.category == data.toLowerCase());

   return (
      <div className="py-10 max-w-[85%] mx-auto bg-white">
         {healthCategory.length > 0 ? 
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
               {
                  healthCategory.map(item => <Item key={item.id} item={item}></Item>)
               }
            </div> : 
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
               {
                  items.map(item => <Item key={item.id} item={item}></Item>)
               }
            </div>}
      </div>
   );
};

Items.propTypes = {
   data: PropTypes.object.isRequired
}

export default Items;