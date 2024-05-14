import React from 'react';
import FacebookIcon from '../assets/fb.png';
import InstagramIcon from '../assets/in.png';
import YouTubeIcon from '../assets/yt.png';

const Footer = () => {
  return (
    <footer className=" text-white py-4">
      <div className="container mx-auto flex flex-wrap justify-around bg-[#ebe9e5] py-8">
        <div className="flex flex-col items-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-black">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
          </svg>
          <p className="text-sm text-black font-semibold">Free Shipping</p>
        </div>
        <div className="flex flex-col items-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-black font-semibold">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
          </svg>
          <p className="text-sm text-black font-semibold">Secured Payments</p>
        </div>
        <div className="flex flex-col items-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-black font-semibold">
            <path strokeLinecap="round" strokeLinejoin="round" d="m9 7.5 3 4.5m0 0 3-4.5M12 12v5.25M15 12H9m6 3H9m12-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          <p className="text-sm text-black font-semibold">Easy Returns</p>
        </div>
        <div className="flex flex-col items-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-black font-semibold">
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
          </svg>
          <p className="text-sm text-black font-semibold">Prompt Support</p>
        </div>
      
      </div>
     <div className='bg-[#e2e2e2] py-8'>
      <div className="flex  justify-center items-center mb-4">
          <img src={FacebookIcon} alt="Facebook" className="w-12 h-12 mr-4" />
          <img src={InstagramIcon} alt="Instagram" className="w-12 h-12 mx-4" />
          <img src={YouTubeIcon} alt="YouTube" className="w-12 h-12 ml-4" />
        </div>
        <div className="text-center w-full mt-8 ">
          <p className="text-lg mb-2 text-gray-900 mb-4 mt-4">© 2024, Russellen Brown All Rights Reserved.</p>
          <p className="text-lg text-gray-600 flex justify-around items-center" >
            <a href="/refund-policy" className="text-gray-600 font-thin hover:text-gray-900">Refund Policy</a>  
            <a href="/privacy-policy" className="text-gray-600 font-thin hover:text-gray-900"> Privacy Policy</a>  
            <a href="/terms-of-service" className="text-gray-600 font-thin hover:text-gray-900"> Terms of Service</a>  
            <a href="/shipping-policy" className="text-gray-600 font-thin hover:text-gray-900"> Shipping Policy</a>  
            <a href="/contact" className="text-gray-600 font-thin hover:text-gray-900"> Contact Information</a>
          </p>
        </div>
        </div>
    </footer>
  );
};

export default Footer;
