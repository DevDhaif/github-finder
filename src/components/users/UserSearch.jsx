import React, { useState,useContext } from 'react';
import GithubContext from '../../context/github/GithubContext';
import { FaSearch } from 'react-icons/fa';

function UserSearch() {
    const {users,searchUsers,deleteUsers}=useContext(GithubContext)
    const [text, setText] = useState('');
    const handleChange=(e)=>{setText(e.target.value)}
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(text === ''){
            alert('enter something')
        }
        else{
            setText('')
            searchUsers(text)
        }
    }
    const handleDelete=()=>{
        deleteUsers()
    }
    return (
            <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-3 md:grid-cols-2 mb-8 gap-8'>
                <div>
                    <form onSubmit={handleSubmit} className='form-control' action="">
                        <div className="relative">
                            <input type="text" className="w-full pr-40 bg-gray-200 input input-lg text-black" value={text} onChange={handleChange} placeholder='Search for Github user...' />
                            <button type='submit' className='absolute top-0 right-0   rounded-l-none w-36 btn btn-lg '>
                                <FaSearch/>
                            </button>
                        </div>
                    </form>
                </div>
                {users.length>0 && (
                    <div>
                        <button onClick={handleDelete} className='btn btn-ghost btn-lg'>Clear</button>
                    </div>
                )}
            </div>
        )
}

export default UserSearch;
