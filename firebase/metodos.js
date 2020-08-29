import app from 'firebase/app';
import 'firebase/auth'; //Importar la autenticacion de firebase
import 'firebase/firestore'; //Importar firestore
import 'firebase/storage'; //Importar el storage

import firebaseConfig from 'firebase/config';

class Firebase {
    constructor() {
        if(!app.apps.length) {
            app.initializeApp(firebaseConfig)
        }
        this.auth = app.auth();
        this.db = app.firestore();
        this.storage = app.storage();
    }

    //MÉTODOS
    //Registrar usuario
    async registrar(nameAndType, email, contraseña) {
        const datos = JSON.stringify(nameAndType)
        const nuevoUsuario = await this.auth.createUserWithEmailAndPassword(email, contraseña);
        await nuevoUsuario.user.updateProfile({ //Añade e nombre del usuario y lo retorna
            displayName: datos
        })

        return nuevoUsuario
    }

    almacenamiento() {
        return this.storage
    }
    
    //Iniciar Sesion 
    async login(email, password) {
        return this.auth.signInWithEmailAndPassword(email, password) //Retorna el usuario
    }

    //Cerrar Sesion
    async cerrarSesion() {
        await this.auth.signOut();
    }

    //Crear usuario en la BD
    async crearUsuarioBD(datos) {
        return await this.db.collection('usuarios').add(datos)
    }

    //Registrar un producto
    async nuevoProducto(datos) {
        return await this.db.collection('productos').add(datos)
    }

    //Obtener todos los productos
    async getProductos() {
        const respuesta = await this.db.collection("productos")
            .get()
            .then(querySnapshot => {
                const productos = querySnapshot.docs.map( doc => {
                    return {
                        id: doc.id, 
                        usuario: doc.data().usuario,
                        nombre: doc.data().nombre,
                        marca: doc.data().marca,
                        piezas: doc.data().piezas,
                        precio: doc.data().precio,
                        descripcion: doc.data().descripcion,
                        likes: doc.data().likes,
                        fotoURL: doc.data().fotoURL                                      
                    }
                })
                return productos
            })
        
            return respuesta;
    }

    //Obtener todos los productos
    async getProductosUltimos() {
        const respuesta = await this.db.collection("productos").limit(3)
            .get()
            .then(querySnapshot => {
                const productos = querySnapshot.docs.map( doc => {
                    return {
                        id: doc.id, 
                        usuario: doc.data().usuario,
                        nombre: doc.data().nombre,
                        marca: doc.data().marca,
                        piezas: doc.data().piezas,
                        precio: doc.data().precio,
                        descripcion: doc.data().descripcion,
                        likes: doc.data().likes,
                        fotoURL: doc.data().fotoURL                                      
                    }
                })
                return productos
            })
        
            return respuesta;
    }


    //Obtener productos de la empresa
    async getProductosEmpresa(email) {
        const respuesta = await this.db.collection("productos").where("usuario", "==", email)
        .get()
        .then(function (querySnapshot) {
            const productos = querySnapshot.docs.map(producto => {
                return {
                    ...producto.data(),
                    id: producto.id
                }
            })
            return productos
        });

        return respuesta      
    }

    //Obtener informacion de 1 producto
    async getProducto(id) {
        return await this.db.collection("productos").doc(id)
            .get()
            .then(doc => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            })
    }

    //Obtener informacion de la empresa
    async obtenerUsuario(email) {
            const respuesta =  await this.db.collection("usuarios").where("email", "==", email)
            .get()
            .then(querySnapshot => { 
                const info = querySnapshot.docs.map(doc => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                });
                return info
            })
            return respuesta;
    }

    //Actualizar informacion del usuario
    async actualizarInfo(email, info) {
        await this.db.collection("usuarios").where("email", "==", email)
        .get()
        .then(querySnapshot => {
            const id = querySnapshot.docs.map(doc => {
                return doc.id
            })
            return id
        })
        .then( id => this.db.collection("usuarios").doc(id[0]).update(info)  )
    }

    //Actualizar nombre de la empresa en el producto
    async actualizarNombreEmpresaProducto(email, nombre) {
        return await this.db.collection("productos").where("usuario", "==", email)
        .get()
        .then(querySnapshot => {
            const ids = querySnapshot.docs.map(doc => {
                return doc.id
            })
            return ids
        })
        .then( ids => ids.forEach(el => this.db.collection("productos").doc(el).update({usuarioNombre: nombre})))
        
    }

    //Actualizar informacion de un producto
    async actualizarProducto(id, info) {
        await  this.db.collection("productos").doc(id).update(info)
    }

    //Añadir Me Gusta
    async meGusta(id, likes) {
        const datos = {
            likes
        }
        await this.db.collection("productos").doc(id).update(datos)
    }

    //Eliminar un producto 
    async eliminarProducto(id) {
        await this.db.collection("productos").doc(id).delete()
    }

    //Compra de un producto 
    async ComprarProducto(id) {
        let nuevasPiezas
        return await this.db.collection("productos").doc(id)
        .get()
        .then(querySnapshot => {
            const {piezas} = querySnapshot.data() 
            if(piezas > 1) {
                nuevasPiezas = piezas -1
                this.db.collection("productos").doc(id).update({piezas: nuevasPiezas})
            } else if(piezas === 1) {
                this.db.collection("productos").doc(id).delete()
            }
        })
        
    }
}

const firebase = new Firebase();
export default firebase;