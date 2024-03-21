import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const { userid } = useParams()
  return (
    <div className='text-center p-9 font-bold'>
        USER: {userid}
    </div>
  )
}

export default User
