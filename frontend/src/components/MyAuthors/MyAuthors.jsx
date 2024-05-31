import React from 'react'
import './MyAuthors.css'
import { authors } from '../../assets/assets'
// import { authorDetails } from '../../assets/authorDetails'

const MyAuthors = ({id, name, designation, email, phone}) => {
  return (
    <div>
        <div className='benjamin'>
        <img className='ben' src={authors.ben} alt="" />
        <div className="text">
          <h3>{name}</h3>
          <p>{designation}</p>
          <small>{email}</small>
          <h6>{phone}</h6>
        </div>
      </div>
    </div>
  )
}

export default MyAuthors