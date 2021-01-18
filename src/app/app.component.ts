import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';

  nombre = 'Capitan America';
  nombre2 = 'jAiR CeLis';
  PI: number = Math.PI;
  porcentaje = 0.234;
  salario = 1234.5;
  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: '500'
  };

  idioma = 'es-CO';

  videoUrl = 'https://www.youtube.com/embed/DIlbsY-7aDQ';

  activar = true;

  valorPromesa = new Promise<string>( (resolve) => {
    setTimeout(() => {
      resolve('Llego la data');
    }, 4500);
  });
  fecha = new Date();

  espanol() {
    this.idioma = 'es-CO';
  }

  ingles() {
    this.idioma = 'es-US';
  }

  frances() {
    this.idioma = 'fr';
  }
}
