import React,{Component} from 'react';
//agregamos referencia al archivo json
import ListaProductos from '../data/productos.json';
import Carta from './card';
import { Row } from 'react-bootstrap';

class Productos extends Component{
 render() {
 //Recorrido del json para mostrar los datos en componente Card
 return (
     <Row>
 {ListaProductos.map((ProductosDetalle,index) => (
 <Carta
 MarcaProducto= {ProductosDetalle.value.marca}
NombreProducto={ProductosDetalle.value.nombre}
PresentacionProducto={ProductosDetalle.value.presentacion}
 />
 ))}
 </Row>
 );
 }
}
export default Productos;