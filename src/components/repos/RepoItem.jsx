import React from 'react';
import PropTypes from 'prop-types'
import { FaCodeBranch, FaEye, FaInfo, FaLink, FaStar } from 'react-icons/fa';

function RepoItem({repo}) {
    const {name,description,html_url,forks,open_issues,watchers_count,stargazers_count,language}=repo;

  return(
      <div className='mb-2 rounded-md card bg-base-200 hover:bg-base-300 text-base-content'>
        <div className="card-body">
            <h3 className="mb2 text-xl font-semibold">
                <a href={html_url}><FaLink className='inline mr-1 '/>{name}</a>
            </h3>
            <p className='my-3 '>{description}</p>
            <div>
                <div className='mr-2 badge badge-info badge-lg'>
                    <FaEye className='mr-2'/>{watchers_count} 
                </div>
                <div className='mr-2 badge badge-success badge-lg'>
                    <FaStar className='mr-2'/>{stargazers_count} 
                </div>
                <div className='mr-2 badge badge-error badge-lg'>
                    <FaInfo className='mr-2'/>{open_issues} 
                </div>
                <div className='mr-2 badge badge-warning badge-lg'>
                    <FaCodeBranch className='mr-2'/>{forks} 
                </div>
                {language &&(   
                <span className='mx-2 badge badge-outline'>{language}</span>
                )}
            </div>
        </div>
      </div>
    
  )
}

RepoItem.propTypes={
repo:PropTypes.object.isRequired
}
export default RepoItem;
