import fs from 'fs'
const ruta = './productos.json'
export default class ProductoService{

    getAllProducto= async() =>{
        const data = await fs.promises.readFile(ruta,'utf-8')
        const productos = JSON.parse(data)
        return productos
    }
    AddcreateProducto = async(comp) =>{
        const productos = await this.getAllProducto()
        productos.push(comp)
        const res = await fs.promises.writeFile(ruta,JSON.stringify(productos,null,4),'utf-8')
        return true
    }
    deleteProductoById = async(id_computador) =>{
        const productos = await this.getAllProducto()
        const createproducto = productos.filter(producto => producto.id_producto != id_producto)
        const res = await fs.promises.writeFile(ruta,JSON.stringify(createproducto,null,4),'utf-8')
        return true
    }
    searchProductoById =async(id_producto) =>{
        const productos = await this.getAllProducto()
        const prod = productos.filter(producto => producto.id_producto === id_producto)
        return prod
    
    }
    updateProductoById = async(id_producto,update) =>{
        const productos = await this.getAllProducto()
        const res = await fs.promises.writeFile(ruta,JSON.stringify(createproducto,null,4),'utf-8')
        const prod = productos.filter(producto => producto.id_producto === id_producto) 
        console.log(e)
        
    }
}