import React from 'react'
import { Routes, Route } from 'react-router'
import Login from '../Pages/Login'
import Sign from '../Pages/Sign'

const publicroutes = () => {
    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Sign />} />

        </Routes>
    )
}

export default publicroutes
