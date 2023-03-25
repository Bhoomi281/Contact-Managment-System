import React from "react";
import { useState , useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import  search from "../images/search";

const SearchBar=()=>{
  const [data, setData] = useState([]);
  const [ SearchApiData, setSearchApiData] = useState([])
  const [filterVal , setFilterVal] = useState("")
  
  useEffect(()=>{
    const fetchData=()=>{
        fetch("/getposts/:email")
        .then(res => res.json())
        .then(setData(json))
        setSearchApiData(json)
    }
    fetchData()
  }, [])

  let handleFilter = (e) => {
    if(e.target.value == '')
    {
        setData(setSearchApiData)
    }
    else{
        let  filterResult = SearchApiData.filter(item=> item.email.includes(e.target.value))
        setData(filterResult);
    }
    setFilterVal(e.target.value)
  };

  return (
    <div className="main">
      <span id="import-image">
                <img src={search} />
              </span>
      <input id="search-input" type="search" className="form-control" placeholder="Search by Email id.." value={filterVal} onInput={(e)=>handleFilter(e)} />
    </div>
  );
}

export default SearchBar;