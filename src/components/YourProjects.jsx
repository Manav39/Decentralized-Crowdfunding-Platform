import React, { useEffect ,useState} from 'react'
import { MyAddedProjects , loadProjects} from '../services/blockchain'
import { useGlobalState } from '../store'
import ProjectCard from './ProjectCard';
const YourProjects = () => {
//     const [connectedAccount] = useGlobalState('connectedAccount');
//     const [myProj] = useGlobalState('myProj');
//     const projects = myProj;
//     console.log('myProjects',project)
//     useEffect(async()=>{
//         await MyAddedProjects(connectedAccount);
//     },[connectedAccount])
//   return (
//     <div className='py-10 mt-10 '>
        
//     </div>
//   )
const [myProj] = useGlobalState('myProj');

const [connectedAccount] = useGlobalState('connectedAccount');
const [end, setEnd] = useState(4)
const [count] = useState(4)
const [collection, setCollection] = useState([])

const getCollection = () => myProj.slice(0, end)

useEffect(async() => {
  await MyAddedProjects(connectedAccount);
  setCollection(getCollection())
}, [connectedAccount,myProj])

return (
  <div className="flex flex-col px-6 mb-7 bg-black h-screen w-full text-white">
    <center><h1 className='mt-20 text-3xl'>My Added Projects ({myProj.length})</h1></center>
    <div className="flex justify-center items-center flex-wrap">
      {collection.map((project, i) => (
        <ProjectCard key={i} project={project} />
      ))}
    </div>

        
    {/* {myProj.length > collection.length ? (
      <div className="flex justify-center items-center my-5">
        <button
          type="button"
          className="inline-block px-6 py-2.5 bg-green-600
        text-white font-medium text-xs leading-tight uppercase
        rounded-full shadow-md hover:bg-green-700"
          onClick={() => setEnd(end + count)}
        >
          Load more
        </button>
      </div>
    ) : null} */}
  </div>
)
}

export default YourProjects