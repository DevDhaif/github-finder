import React from 'react';
import { useEffect,useState } from 'react';
import { FaSpinner } from 'react-icons/fa';
import Spinner from '../layout/Spinner';
import UserItem from './UserItem';
function UserResults() {

    const [users,setUsers]=useState([])
    const [loading,setLoading]=useState(true)


    useEffect(()=>{
        fetchUsers()
    },[])

    const fetchUsers=async ()=>{
        const response=await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`,{
           headers:{
               Authorization:`token ${process.env.REACT_APP_GITHUB_TOKEN}`
           } }
        )
        const data=await response.json()

        setUsers(data)
        setLoading(true)
    }
    if(!loading){
  return <div>
  
           <h1>
           user result
           
           </h1>
           <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3  md:grid-cols-2'>

            {users.map((user)=>(
                <>
                <UserItem key={user.id} user={user}/>
                </>
            ))}
           </div>
  
  </div>}
  else {
      return (
        <div className='mx-auto flex justify-center'>
        <FaSpinner className='h-20 w-20 animate-load fill-violet-500 ease-linear'/>

        </div>
      )
  }
}

export default UserResults;
