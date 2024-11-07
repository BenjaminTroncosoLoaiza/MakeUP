import config from '../config/configKnex.js'
import knex from 'knex'

export default class ProductoService{
    constructor(){
        this.knex = knex(config)
    }
    getAllProducto= async() =>{
        return await this.knex.from('productos').select('*')
        
    }
    AddcreateProducto = async(data) =>{
        return this.knex('productos').insert(data)
    }
    deleteProductoById = async(id) =>{
        return this.knex('productos').where({producto_id:id}).delete()
    }
    searchProductoById =async(id) =>{
        return this.knex('productos').where({producto_id:id}).first();
    }
    updateProductoById = async(id,body) =>{
        return this.knex('productos').where({producto_id:id}).update(body)
           
    }
}