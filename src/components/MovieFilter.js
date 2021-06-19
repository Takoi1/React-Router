import React from 'react'

const MovieFilter = ({handelSearch}) => {
    return (
        <div className='search'> 
            <input 
           
            placeholder="Search" 
            onChange={
                e=>handelSearch(e.target.value.trim())
                } />
        </div>
    )
}

export default MovieFilter