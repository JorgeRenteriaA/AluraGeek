async function listar_productos() {
    try {
        const conexion = await fetch("http://localhost:3001/productos", {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            }
        });

        const conexionConvertida = await conexion.json();
        return conexionConvertida;
    } catch (error) {
        console.error('Error al realizar la solicitud:', error);
        throw error; 
    }
}

async function crear_producto(nombre, precio, imagen) {
    console.log("Creando producto...");
    console.log("Datos recibidos:", nombre, precio, imagen);
    const conexion = await fetch("http://localhost:3001/productos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            nombre: nombre,
            precio: precio,
            imagen: imagen
        })
    })
    if (!conexion.ok) {
        throw new Error("No fue posible enviar el video");
    }
    const conexionConvertida = await conexion.json();

    return conexionConvertida;
}

async function buscar_producto(referencia) {
    const conexion = await fetch(`http://localhost:3001/productos?q=${referencia}`)
    const conexionConvertida = conexion.json();

    return conexionConvertida;
}


export async function eliminar_producto(idProducto) {
    try {
        const conexion = await fetch(`http://localhost:3001/productos/${idProducto}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json"
            }
        });

        if (!conexion.ok) {
            throw new Error("No fue posible eliminar el producto");
        }

        const respuesta = await conexion.json();
        return respuesta;
    } catch (error) {
        console.error('Error al realizar la solicitud:', error);
        throw error;
    }
}



export const conexionAPI = {
    listar_productos, crear_producto, buscar_producto, eliminar_producto
}
