import { Link } from 'react-router-dom';

export const LearnDetection = () => {
 return (
  <div className="flex justify-center items-end h-screen flex-wrap relative">
   <Link to={'/'}>
    <div className="backdrop-blur-sm bg-white/30 text-center px-10 py-3 rounded-3xl text-lg shadow-[5px_5px_10px_0px_rgba(0,0,0,0.3)] absolute left-[5%] top-[1%] flex items-center">
     <p>
      <i className="fa-solid fa-chevron-left text-xl text-third pe-3"></i> Back to Home
     </p>
    </div>
   </Link>
   <div className="backdrop-blur-sm bg-white/30 text-center px-10 py-3 rounded-3xl text-xl shadow-[5px_5px_10px_0px_rgba(0,0,0,0.3)] font-bold italic">
    <p className="text-slate-700">Real Time Detection</p>
   </div>
   <img src="http://127.0.0.1:5000/yoloModel" alt="" className="w-[90%] h-[100%] object-cover object-center rounded-lg border-4 border-white" />
  </div>
 );
};
