import { Component} from '@angular/core';
import { Producto } from './interfaces/Producto.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'templates_directivas_typescript';
  productosSeleccionados: Producto[] = []
  modoOscuro: boolean = false

  //Aqui declararemos los dos metodos 
  // que recogeran los datos provenientes de los @Outputs()
  // y asignara los datos donde corresponda

}
