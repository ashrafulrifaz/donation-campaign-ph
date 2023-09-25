import { useEffect, useState } from "react";
import { getDonationItem } from "../../LocalStorage";
import { useLoaderData } from "react-router-dom";
import Donation from "./Donation";

const Donations = () => {
   const campaignData = useLoaderData()
   const [donateItems, setDonateItems] = useState([])

   useEffect(() => {
      const localItem = getDonationItem()
      if(campaignData.length > 0){
         const donatedItem = campaignData.filter(data => localItem.includes(data.id))
         setDonateItems(donatedItem)
      }
   }, [campaignData])

   return (
      <div className="max-w-6xl mx-auto py-10">
         <div className="grid grid-cols-2 gap-6">
            {
               donateItems.map(item => <Donation key={item.id} item={item}></Donation>)
            }
         </div>
      </div>
   );
};

export default Donations;