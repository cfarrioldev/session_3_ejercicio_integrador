import { Component, Input, EventEmitter, Output} from '@angular/core';
import { Producto } from 'src/app/interfaces/Producto.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent  {

  <!-- Esto lo dejare de referencia para completar el resto de la aplicación -->

@Input({required: true}) producto: any
@Output() addToCart: EventEmitter<Producto>= new EventEmitter()

enviarAMiPadre(producto: Producto){
  this.addToCart.emit(producto)
}

}
