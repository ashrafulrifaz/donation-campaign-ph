import { useState } from "react";
import Banner from "../../Components/Banner/Banner";
import Items from "../../Components/Items/Items";
import { useLoaderData } from "react-router-dom";

const Home = () => {
   const [data, setData] = useState('')
   const campaignData = useLoaderData()

   const recieveDataToItem = (data) => {
      setData(data);
   }

   return (
      <div>
         <Banner sendDataToItem={recieveDataToItem}></Banner>
         <Items data={data} campaignData={campaignData}></Items>
      </div>
   );
};

export default Home;