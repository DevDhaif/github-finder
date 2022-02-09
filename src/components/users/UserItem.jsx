import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { FaLongArrowAltRight } from 'react-icons/fa';
function UserItem({user:{login,avatar_url}}) {
  return <div className='card compact mt-2 shadow-lg card-side bg-base-200/80'>
            <div className='flex-row items-center space-x-4 card-body'>
                <div>
                    <div className='avatar'>
                        <div className=' rounded-full w-16 h-16'>
                            <img   src={avatar_url} alt="Profile" />
                        </div>
                    </div>
                </div>
            
            <div className=''>
                <h1 className='card-title '>
                        {login}
                </h1>
                <Link to={`/user/${login}`} className='text-base-content/50 items-baseline flex space-y-2 space-x-2 '>
                <h2>
                Visit 
                </h2>
                
                <FaLongArrowAltRight className='text-teal-600 hover:fill-teal-400'/> 
                </Link>

            </div>
            </div>
          </div>;
}
UserItem.propTypes={
    user:PropTypes.object.isRequired
}
export default UserItem;
