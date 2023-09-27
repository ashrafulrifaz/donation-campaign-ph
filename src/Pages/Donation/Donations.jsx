import { useEffect, useState } from "react";
import { getDonationItem } from "../../LocalStorage";
import Donation from "./Donation";
import { useLoaderData } from "react-router-dom";

const Donations = () => {
   const campaignData = useLoaderData()
   const [donateItems, setDonateItems] = useState([])
   const [isShow, setIsShow] = useState(false)
   
   useEffect(() => {
      const localItem = getDonationItem()

      if(campaignData.length > 0){
         const donatedItem = campaignData.filter(data => localItem.includes(data.id))
         setDonateItems(donatedItem)
      }
   }, [])

   return (
      <div className="max-w-[85%] mx-auto py-10">
         <div>
            {donateItems.length > 0 ? 
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
               {
                  isShow ? donateItems.map(item => <Donation key={item.id} item={item}></Donation>) :
                  donateItems.map(item => <Donation key={item.id} item={item}></Donation>).slice(0, 4)
               }
            </div>
            : 
            <p className="text-center font-medium text-2xl">You have not donated yet</p>}
         </div>
         <div className={`py-8 ${isShow ? 'hidden' : 'block'}`}>
            <button onClick={() => setIsShow(!isShow)} className={`mx-auto rounded-md bg-[#FF444A] text-white px-5 py-2 text-sm ${donateItems.length > 4 ? 'block' : 'hidden'}`}>Show All</button>
         </div>
      </div>
   );
};

export default Donations;
