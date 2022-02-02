import React from 'react';
import { useEffect,useState } from 'react';
import spinner from '../layout/Spinner';
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
                <h2 className='uppercase'>{user.login}</h2>
                
            ))}
           </div>
  
  </div>}
  else {
      return <spinner />
  }
}

export default UserResults;
