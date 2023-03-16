import React from 'react'
import { Routes, Route } from 'react-router-dom'
const Home = React.lazy(() => import('../Homepage/Home'))


const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
    </Routes>
  )
}

export default AllRoutes