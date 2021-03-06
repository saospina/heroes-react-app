import React, { useEffect, useReducer } from 'react'
import { AppRouter } from './routers/AppRouter';
import { AuthContext } from './auth/AuthContext';
import { authReducer } from './auth/authReducer';

const init = () => (
    JSON.parse(localStorage.getItem('user')) || { logged: false }
)

export const HeroesApp = () => {

    const [userState, dispatch] = useReducer(authReducer, {}, init);

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(userState))

    }, [userState])

    return (
        <AuthContext.Provider value={{ userState, dispatch }}>
            <AppRouter />
        </AuthContext.Provider>
    )
}
