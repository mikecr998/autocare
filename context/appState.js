import React, {useReducer} from 'react';
import AppContext from './appContext'
import AppReducer from './appReducer'

import {
    ALMACENAR_PRODUCTOS,
    OBTENER_PRODUCTO
} from "../types"

const AppState = ({children}) => {
    //STATE GLOBAL
    const initialState = {
        productos: [],
        productoSeleccionado: null
    }

    //CREAR DISPACTH Y STATE
    const [state, dispatch] = useReducer(AppReducer, initialState)

    //CREAR LOS ACTIONS

    //Obtener un producto en expecifico
    const obtenerProducto = (producto) => {
        dispatch({
            type: OBTENER_PRODUCTO,
            payload: producto
        })
    }

    return (
        <AppContext.Provider
            value={{
                productos: state.productos,
                productoSeleccionado: state.productoSeleccionado,
                obtenerProducto
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export default AppState;