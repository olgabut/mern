import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthPage } from './pages/AuthPage'
import { CreatePage } from './pages/CreatePage'
import { DetailPage } from './pages/DetailPage'
import { LinksPage } from './pages/LinksPage'

export const useRoutes = (isAuthenticted) => {
    if (isAuthenticted) {
        return (
            <>
                <Routes>
                    <Route path="/links" exact>
                        <LinksPage />
                    </Route>
                    <Route path="/create" exact>
                        <CreatePage />
                    </Route>
                    <Route path="/detail/:id">
                        <DetailPage />
                    </Route>
                    
                </Routes>
                <Navigate to="/create" replace={true} />
            </>
        )
    }

    return (
        <>
            <Routes>
                <Route path="/" exact element={<AuthPage/>} />
            </Routes>
            <Navigate to="/" replace={true} />
        </>
    )
}