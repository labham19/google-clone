import React , { useContext, useEffect } from 'react'
import SearchContext from '../context/SearchContext';
import { Helmet } from 'react-helmet'

const GoogleComponent = () => {
  const SS = useContext(SearchContext);
  const {term} = SS;
  

  useEffect(()=>{
    setTimeout(()=>{
      document.getElementById('gsc-i-id1').value = term;
      document.getElementsByClassName('gsc-search-button')[1].click();
    },300)
  },[])

  return (
     <>
     <Helmet>
      <script async src="https://cse.google.com/cse.js?cx=9281c2a8552b74eb5">
      </script>
     </Helmet>
    <div className="gcse-search"></div>
     </>
      
  )
}


export default GoogleComponent
