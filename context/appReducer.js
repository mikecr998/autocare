import {
    ALMACENAR_PRODUCTOS,
    OBTENER_PRODUCTO
} from "../types"

export default (state, action) => {
    switch (action.type) {
        case OBTENER_PRODUCTO: 
            return {
                ...state,
                productoSeleccionado: action.payload
            }
        default:
            return state;
    }
}