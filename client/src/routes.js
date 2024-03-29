import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthPage } from './pages/AuthPage'
import { CreatePage } from './pages/CreatePage'
import { DetailPage } from './pages/DetailPage'
import { LinksPage } from './pages/LinksPage'

export const useRoutes = (isAuthenticted) => {
    console.log('isAuth:', isAuthenticted)
    if (isAuthenticted) {
        return (
            <>
                <Routes>
                    <Route path="/links" exact element={<LinksPage />} />
                    <Route path="/create" exact element={<CreatePage />} />
                    <Route path="/detail/:id" element={<DetailPage />} />
                    <Route path="*" element={<Navigate to="/create" />} />
                </Routes>
            </>
        )
    }

    return (
        <>
            <Routes>
                <Route path="/" exact element={<AuthPage/>} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </>
    )
}