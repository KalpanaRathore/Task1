import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
        <div>Home</div>
        <Link to='/login'><button className='btn'>Go To Dashboard</button></Link>
    </>
  )
}

export default Home