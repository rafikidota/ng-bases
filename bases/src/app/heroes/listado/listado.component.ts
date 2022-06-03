import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'

})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Iron Man', 'Hulk', 'Thor'];
  heroeBorrado: string = '';

  borrarHeroe() {
    console.log('borrando...');
    if (this.heroeBorrado == '' && this.heroes.length == 0) {
      this.heroes = ['Spiderman', 'Iron Man', 'Hulk', 'Thor'];
    } else {
      this.heroeBorrado = this.heroes.shift() || '';
    }
  }
}
