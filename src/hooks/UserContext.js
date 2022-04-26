//Usando o Context para permitir que alguns dados (como token, nome, email) fique disponível para acesso na aplicação inteira

import React, { createContext, useContext, useEffect, useState } from "react";

import PropTypes from 'prop-types'

const UserContext = createContext({})

export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState({})

    const putUserData = async userInfo => {
        setUserData(userInfo)

        //Gravando os dados no Local Storage -> Para não perder os dados quando o projeto é reiniciado
        await localStorage.setItem('labluby:userData', JSON.stringify(userInfo))

    }

    //Recuperando os dados do Local Storage
    useEffect(() => {
        const loadUserData = async () => {
            const clientInfo = await localStorage.getItem('labluby:userData')


            if (clientInfo) {
                setUserData(JSON.parse(clientInfo))
            }
        }
        loadUserData()
    }, [])

    return (
        <UserContext.Provider value={{ putUserData, userData }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => {
    const context = useContext(UserContext)

    if (!context) {
        throw new Error("useUser must be used with UserContext")
    }

    return context
}

UserProvider.propTypes = {
    children: PropTypes.node
}