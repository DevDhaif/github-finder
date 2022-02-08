import { useContext} from 'react';
import { FaSpinner } from 'react-icons/fa';
import UserItem from './UserItem';
import GithubContext from '../../context/github/GithubContext';

function UserResults() {
  const {users,loading}=useContext(GithubContext)


    // useEffect(()=>{
    //     fetchUsers()
        
    // },[])

    
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
