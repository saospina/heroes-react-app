import React, { useContext } from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { AuthContext } from '../auth/AuthContext';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

    const { userState } = useContext(AuthContext);
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <PublicRoute
                        exact path="/login"
                        component={LoginScreen}
                        isAuthenticated={userState.logged}
                    />
                    <PrivateRoute
                        path="/"
                        component={DashboardRoutes}
                        isAuthenticated={userState.logged}
                    />
                </Switch>
            </div>
        </BrowserRouter>
    )
}
