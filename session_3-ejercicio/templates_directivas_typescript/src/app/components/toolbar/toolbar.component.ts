import { Component } from '@angular/core';
import { Producto } from 'src/app/interfaces/Producto.interface';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
//Aqui recibiremos el array de productos seleccionados mediante Input() 
// por que con su longitud proyectaremos la cantidad de articulos en el carrito
estaOscuro: boolean = false;
// Declararemos el Output() que enviara la orden al padre para cambiar el modo noche u oscuro


//Declarar el metodo que actualizara el booleano, que dara la orden al padre 
// mediante el Output() para cambiar a modo noche


}
