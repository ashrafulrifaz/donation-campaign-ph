import { Link } from "react-router-dom";

const ErrorPage = () => {
   return (
      <div className="text-center py-20">
         <h1 className="text-5xl font-bold mb-10">Opps! Page Not Found</h1>
         <Link to="/">
            <button className="bg-[#FF444A] text-white rounded-md px-5 py-2 text-sm">Back to Home</button>
         </Link>
      </div>
   );
};

export default ErrorPage;