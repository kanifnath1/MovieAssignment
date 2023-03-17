import React from 'react'
import { useGlobalContext } from './context'

const Search = () => {
    const{query,setquery,isError}=useGlobalContext();
  return (
    <>
        <section className='search'>
            <h2>Search Your Favourite Movie</h2>
            <form action="#" onSubmit={(e)=>{e.preventDefault();}}>
                <input type="text" placeholder='search here'  value={query} onChange={(e)=>setquery(e.target.value)}>

                </input>
            </form>
        </section>
        <div className='card-errror'>
            <p>{isError.show && isError.msg }</p>
        </div>
    </>
  )
}

export default Search