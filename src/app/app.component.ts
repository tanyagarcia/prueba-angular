import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  edadUno:number = 0;
  edadDos:number = 0;
  resultadoSuma:number = 0;
  resultadoPromedio:number = 0;


Sumar()
{
  this.resultadoSuma = this.edadUno + this.edadDos;
}

Promedio()
{
  var resultado = this.edadUno + this.edadDos;
  this.resultadoPromedio = resultado / 2;
}

}
