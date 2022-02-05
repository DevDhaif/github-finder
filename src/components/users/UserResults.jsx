import { useContext,useState, useEffect } from 'react';
import { FaSpinner } from 'react-icons/fa';
import UserItem from './UserItem';
import GithubContext from '../../context/github/GithubContext';

function UserResults() {
  const {users,loading,fetchUsers,ff}=useContext
  (GithubContext)

// const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
// const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN


// const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
  
 
//   const fetchUsers = async () => {
//     const response = await fetch(`${GITHUB_URL}/users`, {
//       headers: {
//         Authorization: `token ${GITHUB_TOKEN}`,
//       },
//     });

//     const data = await response.json();

//     setUsers(data);
//     setLoading(false);
//   };
    useEffect(()=>{
        fetchUsers()
        ff()
    },[])

    
    if(!loading){
  return (
           <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3  md:grid-cols-2'>

            {users.map((user)=>(
                
                <UserItem key={user.id} user={user}/>
                
            ))}
           </div>
  )
        }
  else {
      return (
        <div className='mx-auto flex flex-col items-center space-y-3 justify-center'>
            <FaSpinner className='h-16 w-16 animate-load fill-teal-400 ease-linear'/>
            <h3>Please wait...</h3>
        </div>
      )
  }
}

export default UserResults;
