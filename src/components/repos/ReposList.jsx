import { AnimatePresence, motion,usePresence } from 'framer-motion';
import RepoItem from './RepoItem';

function ReposList({repos}) {
    const ispresent=usePresence()
    const animation={
        style:{postion:ispresent?'static':'absolute'},
        initial:{scale:0,opacity:0},
        animate:{scale:1,opacity:1},
        exit:{scale:0,opacity:90},
        transition:{type:'spring',duration:1.2}
    }
  return (
      <div className='rounded-lg shadow-lg card bg-base-100 '>
        <div className='card-body'>
            <h2 className='text-3xl my-4 font-bold card-title'>Latest Public Repos :</h2>
            <AnimatePresence>
            {repos.map((repo)=>(
                <motion.div {...animation} layout key={repo.id}>
                    <RepoItem key={repo.id} repo={repo}/>
                </motion.div>
                ))}
            </AnimatePresence>
        </div>
      </div>
      )
}

export default ReposList;
