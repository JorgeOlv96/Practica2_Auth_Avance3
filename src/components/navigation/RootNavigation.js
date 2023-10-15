import React from 'react'
import AppNavigation from './AppNavigation'
import AuthScreen from '../../screen/Auth/AuthScreen'

import { useAuth } from '../../hooks/UseAuth';

const RootNavigation = () => {
    const { user } = useAuth();
    return user ? <AppNavigation /> : <AuthScreen />
}

export default RootNavigation