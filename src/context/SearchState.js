import React, { useState } from 'react'
import SearchContext from './SearchContext';

const SearchState = (props) => {
  const [term,setTerm] = useState("");
  const [searchedVal,setSearchedVal] = useState("");

  

  return (
    <SearchContext.Provider value={{term,setTerm,searchedVal,setSearchedVal}}>
       {props.children}
    </SearchContext.Provider>
  )
}

export default SearchState
