import React from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'

export const MainApp = () => {

    const user = {
        id:'123',
        name:'Saul',
        email:'saullainez@hotmail.es'
    }

    return (

        <UserContext.Provider value={user}>
            <AppRouter />
        </UserContext.Provider>
        

    )
}
