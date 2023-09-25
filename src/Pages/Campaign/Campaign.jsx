import { useLoaderData, useParams } from "react-router-dom";
import { getDonationItem, saveDonationItem } from "../../LocalStorage";
import swal from 'sweetalert';
import { useState } from "react";

const Campaign = () => {
   const [isHave, setIsHave] = useState(false)
   const campaignData = useLoaderData()
   const {id} = useParams()
   const idInt = parseInt(id)

   const findItem = campaignData.find(item => item.id == id)
   const {categoryImage, price, titleColor, title, description} = findItem

   const handleDonate = () => {
      saveDonationItem(idInt)

      const localItem = getDonationItem()
      
   }
   console.log(isHave);

   return (
      <div className="max-w-6xl mx-auto py-10">
         <div>
            <div className="relative">
               <img src={categoryImage} className="w-full rounded-md max-h-[600px]" alt="" />
               <div className="absolute bottom-0 bg-[#0000006e] w-full p-6">
                  <button onClick={handleDonate} style={{backgroundColor: `${titleColor}`}} className="rounded text-white px-5 py-2.5 text-sm">Donate ${price}</button>
               </div>
            </div>
            <div className="mt-7 space-y-4">
               <h2 className="font-bold text-4xl">{title}</h2>
                  <p className="text-[#0B0B0BB2] text-justify">{description}</p>
            </div>
         </div>
      </div>
   );
};

export default Campaign;