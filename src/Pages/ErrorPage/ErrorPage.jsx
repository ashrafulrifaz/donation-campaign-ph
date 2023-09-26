import { Link } from "react-router-dom";
import ErrorImage from '../../assets/404.jpg'

const ErrorPage = () => {
   return (
      <div className="text-center py-20">
         <div className="text-center"> 
            <h2 className="text-5xl font-bold text-[#0176AC]">OOPS</h2>
            <h3 className="text-xl font-medium text-[#00AFE1] mt-4">Page Not Found</h3>
            <img src={ErrorImage} alt="" className="w-1/2 mx-auto" />
         </div>
         <Link to="/">
            <button className="bg-[#00B0E2] text-white rounded-md px-5 py-2 text-sm mt-4">Back to Home</button>
         </Link>
      </div>
   );
};

export default ErrorPage;