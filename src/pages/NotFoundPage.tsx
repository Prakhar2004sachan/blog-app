import React from 'react'
import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div>
        <Link to='/' className='text-black'>Go To Home</Link>
    </div>
  )
}

export default NotFoundPage