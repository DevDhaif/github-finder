import {FaHome} from 'react-icons/fa'
import { Link } from 'react-router-dom';

function NotFound() {
  return <div className='hero'>
  <div className="text-center hero-content">
    <div className="max-w-lg">
      <h1 className="text-6xl font-bold mb-8">
        Not Found
      </h1>
      <p className="text-4xl mb-8">404 - Page not found!</p>
      
      <Link to={'/'} className='btn btn-primary btn-lg'>
      <FaHome className='mr-2'/>
      Go Home
      
      </Link>
    </div>
          <div className='flex flex-col justify-center  items-center'>
          <svg className='sqStroke animate-animate fill-sky-700/40 ease-linear'
          width="100"
              height="250"
               viewBox="0 0 102 468"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="4" width="94" height="460" rx="46"  strokeWidth="8"/>
                </svg>

                <svg className='sqStroke animate-animateb fill-sky-700/40 ease-linear'
                    width="100" 
                    height="100" 
                    viewBox="0 0 100 100" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg">
                    <rect x="25" y="10" width="50" height="50" rx="46"  strokeWidth="4"/>
                </svg>

          </div>

  </div>

  </div>;
}

export default NotFound;
