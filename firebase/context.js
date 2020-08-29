import {createContext} from 'react'
import metodos from './metodos'
import {useState, useEffect} from 'react'

export const FirebaseContext = createContext(null);

const FirebaseProvider = ({children}) => {
 
    const [usuario, setUsuario] = useState(null)

    useEffect(()=> {
        
        const escuchador = metodos.auth.onAuthStateChanged(user => {
                if(user) {
                     metodos.obtenerUsuario(user.email) 
                        .then(user => setUsuario(user[0]))                  
                    
                } else {
                    setUsuario(null)
                }
            })        

        return ()=> escuchador()   
    },[])

            
  

    return (
        <FirebaseContext.Provider
            value={{
                metodos,
                usuario,
            }}
        >
            {children}
        </FirebaseContext.Provider>
    )
}

export default FirebaseProvider;