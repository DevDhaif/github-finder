import {FaHome} from 'react-icons/fa'
import { Link } from 'react-router-dom';

function NotFound() {
  return <div className='hero'>
  <div className="text-center hero-content">
    <div className="max-w-lg z-10 ">
      <h1 className="text-6xl font-bold mb-8">
        Not Found
      </h1>
      <p className="text-4xl mb-8">404 - Page not found!</p>
      
      <Link to={'/'} className='btn btn-primary btn-lg'>
      <FaHome className='mr-2'/>
      Go Home
      
      </Link>
    </div>
          <div className='absolute mx-auto  -ml-14 sm:w-40 -z-10  top-15  flex flex-col justify-center  items-center'>
          <svg className='sqStroke animate-animate md:fill-green-700 lg:fill-red-500 xl:fill-violet-700 sm:fill-orange-500 fill-violet-500 ease-linear'
          width="350"
              height="500"
               viewBox="0 0 102 468"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="4" width="145" height="450" rx="46"  strokeWidth="8"/>
                </svg>

                <svg className='sqStroke mt-6 -mr-24 left-1 animate-animateb fill-violet-500 ease-linear'
                    width="220" 
                    height="235   " 
                    viewBox="0 0 100 100" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="1" width="80" height="80" rx="46"  strokeWidth="4"/>
                </svg>

          </div>

  </div>

  </div>;
}

export default NotFound;
