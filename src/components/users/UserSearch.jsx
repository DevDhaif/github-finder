import React, { useState,useContext } from 'react';
import GithubContext from '../../context/github/GithubContext';
import AlertContext from '../../context/alert/AlertContext';
import { FaSearch } from 'react-icons/fa';
import {searchUsers} from '../../context/github/GithubAction'
import { type } from '@testing-library/user-event/dist/type';
function UserSearch() {

    const {users,deleteUsers,dispatch}=useContext(GithubContext)

    const {setAlert}=useContext(AlertContext)


    const [text, setText] = useState('');
    const handleChange=(e)=>{setText(e.target.value)}
    const handleSubmit= async (e)=>{
        e.preventDefault()
        if(text === ''){
            setAlert('Enter something to seach for','error')
        }
        else{
            dispatch({type:'SET_LOADING'})
            const users=await searchUsers(text)
            dispatch({
                type:'GET_USERS',
                payload:users
            })
            setText('')
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
