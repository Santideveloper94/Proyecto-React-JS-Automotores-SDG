export const Total = (cart) => {
        
    let suma = 0;
        for (let i = 0; i < cart.length; i++) {
        suma = suma + cart[i].cantidad * cart[i].precio;
        }
        return suma;
    };
    
    export const verificarSiHayProductoEnCarrito = (cart, item) => {
            let existe = false;
            for (let i = 0; i < cart.length; i++) {
            if (cart[i].id === item.id) existe = true;
            }
            return existe;
        };
        
        export const unificarItems = (cart, item) => {
            let array = cart;
            for (let i = 0; i < array.length; i++) {
            if (array[i].id === item.id) {
                array[i].cantidad = item.cantidad;
            array[i].stock = item.stock;
        }
        }
            return array;
        };
    
    
    export const validarCampo = (campos) => {
        let invalid = false;
        campos.map((campo) => campo === "" ? invalid = true : invalid = false)
        return invalid
    }