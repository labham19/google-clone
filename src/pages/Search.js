import {Link} from 'react-router-dom';
import GoogleComponent from '../component/GoogleComponent';

const Search = () => {
  return (
    <div>
      <nav className='flex flex-row  items-center h-20 p-8 border-2 space-x-5'>
       <Link to="/" className='w-1/12'> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png" /> </Link>
       
        <GoogleComponent/>
      
      </nav>
      
      <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-500'>This is a Google Clone made by Labham.</h1>

    </div>
  )
}

export default Search
