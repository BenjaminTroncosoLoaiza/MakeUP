import {Router} from 'express'
const router = Router()
import ComputadorService from '../services/productoService.js'
const Computador = new ProductoService()

router.get('',async(req,res)=>{
    try{
        const productos = await Producto.getAllProducto()
        return res.status(200).json(productos)
    }catch (e) {
        console.log('Error' + e)
    }
})
router.get('/create',async(req,res)=>{
    try{
        const newObject = {
            "id_":5,
            "nombre_producto": "LIFTER GLOSS Brillo Labial con Ácido Hialurónico",
            "precio_venta":7000,
            "descripcion_producto":"Lifter Gloss Bronzed de Maybelline NY consigue labios brillantes y bronceados con apariencia redensificada. Sin relleno. Esta fórmula de brillo labial con ácido hialurónico aporta una hidratación duradera y labios más carnosos.",
            "cantidad_producto":8}

        const data = await Producto.AddcreateProducto(newObject)
        return res.status(200).json(data)
    }catch(e){
        console.log('Error' + e)
    }
})
router.get('/delete',async(req,res)=>{
    try{
        const producto = 2
        const respuesta = await Producto.deleteProductoById(id_producto)
        return res.status(200).json(respuesta)
    }catch(e){
        console.log('Error' + e)
    }
})
router.get('/search',async(req,res)=>{
    try{
        const id_producto = 20
        const respuesta = await Producto.searchProductoById(id_producto)
        return res.status(200).json(respuesta)
    }catch(e){
        console.log('Error' + e)
    }
})
router.get('/update', async (req, res) => {
    try {
        const id = 1
        const productos = {
            "id_":4,
            "nombre_producto":"LIFTER LINER DELINEADOR DE LABIOS",
            "precio_venta":6000,
            "descripcion_producto":"Conoce Lifter Liner, el delineador de labios de Maybelline NY de otro nivel",
            "cantidad_producto":13}
 
        const producto = await productos.updateProductoById(id,productos)
        res.status(200).json(producto)
    } catch (e) {
        console.log(e)

    }
})

export default router