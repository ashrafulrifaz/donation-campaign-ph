import { useEffect, useState } from "react";
import Item from "../Item/Item";

const Items = () => {
   const [items, setItems] = useState([])

   useEffect(() => {
      fetch('data.json')
         .then(res => res.json())
         .then(data => setItems(data))
   },[])

   return (
      <div className="py-10 max-w-6xl mx-auto">
         <div className="grid grid-cols-4 gap-5">
            {
               items.map(item => <Item key={item.id} item={item}></Item>)
            }
         </div>
      </div>
   );
};

export default Items;