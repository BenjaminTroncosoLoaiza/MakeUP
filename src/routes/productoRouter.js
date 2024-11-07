import {Router} from 'express'
const router = Router()
import ProductoService from '../service/productoService.js'
const Producto= new ProductoService()

router.get('/productos',async(req,res)=>{
    try{
         const productos = await Producto.getAllProducto()
        //return res.status(200).json(productos)
        console.log(productos)
        return res.render('home', { 
            titulo: 'Make Up 7x8', 
            mensaje: '¡Bienvenido(a)! Aquí puedes comprar todo tipo de maquillaje' 
          });
    }catch (e) {
        console.log('Error' + e)
    }
})
router.get('/inicio',async(req,res)=>{
    try{
         const productos = await Producto.getAllProducto()
        //return res.status(200).json(productos)
        console.log(productos)
        return res.render('productos/inicio', { 
            titulo: 'Make Up 7x8', 
            mensaje: '¡Bienvenido(a)! ¿Has visto las novedades que traemos a tus opciones? ¡Aquí están!' 
          });
    }catch (e) {
        console.log('Error' + e)
    }
})
router.get('/sobre',async(req,res)=>{
    try{
         const productos = await Producto.getAllProducto()
        //return res.status(200).json(productos)
        return res.render('sobre', { 
      titulo: 'Make Up 7x8', productos
    });
}catch (e) {
    console.log('Error' + e)
}
})
router.get('/', async(req, res) => {
    res.redirect('/inicio');
  });

router.post('/',async(req,res)=>{
    try{
        const data = req.body
        const respuesta = await Producto.AddcreateProducto(data)
        return res.status(200).json(respuesta)
    }catch(e){
        console.log('Error' + e)
    }
})
router.delete('/delete/:id',async(req,res)=>{
    try{
        const id = req.params.id
        const respuesta = await Producto.deleteProductoById(id)
        return res.status(200).json(respuesta)
    }catch(e){
        console.log('Error' + e)
    }
})
router.get('/search/:id',async(req,res)=>{
    try{
        const id = req.params.id
        const respuesta = await Producto.searchProductoById(id)
        return res.status(200).json(respuesta)
    }catch(e){
        console.log('Error' + e)
    }
})
router.put('/:id', async (req, res) => {
    try {
        const body = req.body
        const id = req.params.id
        const producto = await Producto.updateProductoById(id,body)
        return res.status(200).json(producto)
    } catch (e) {
        console.log(e)

    }
})

export default router