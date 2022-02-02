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
    <svg
                class="sqStroke animate-animate hover:bg-red-400 rounded-md ease-linear"
                width="250"
                height="250"
                viewBox="0 0 250 250"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <rect
                id="Rectangle 1"
                x="1.5"
                y="1.5"
                width="247"
                height="247"
                strokeWidth="3"
                />
            </svg>
  </div>

  </div>;
}

export default NotFound;
