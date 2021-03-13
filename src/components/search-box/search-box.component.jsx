import React from 'react'

import './serach-box.styles.css'

export const SearchBox = ({ placeholder, handleChage}) => (
    <input 
        className='search'
        type='search' 
        placeholder={placeholder} 
        onChange={handleChage} 
      />
)