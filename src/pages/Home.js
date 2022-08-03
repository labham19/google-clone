import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import SearchContext from '../context/SearchContext'

const Home = () =>{
  let navigate=useNavigate();
  const SS = useContext(SearchContext);
  const {setTerm,searchedVal,setSearchedVal} = SS;
 
  const searchNow = async (e)=>{
    e.preventDefault();
    await setTerm(searchedVal);
    navigate("/search");
  }
  return (
    <div className='h-full w-full'>  
      <form onSubmit={searchNow}>
      <div className='w-4/5 md:w-auto flex flex-col justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-6'>
          
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png" className='w-4/5 md:w-2/5'/>
          
          <div className='flex justify-between items-center w-full md:w-2/3 px-4 py-2 border-2 rounded-3xl hover:bg-slate-100'>
            <i className="fa fa-search cursor-pointer" aria-hidden="true"></i>
            <input value={searchedVal} onChange={(e)=>setSearchedVal(e.target.value)} className='px-3 w-full focus:outline-none bg-transparent' />
            <i className="fa fa-microphone cursor-pointer hover:text-blue-600" aria-hidden="true"></i>
          </div>

          <div className='flex justify-between space-x-3'>
                <button type='submit' className='px-4 py-1 bg-slate-200 text-slate-600 hover:bg-slate-100 rounded-md'>Google Search</button>
                <button className='px-4 py-1 bg-slate-200 text-slate-600 hover:bg-slate-100 rounded-md'>I'm feeling lucky</button>
          </div> 

      </div>
      </form>
    </div>
  )
}

export default Home
