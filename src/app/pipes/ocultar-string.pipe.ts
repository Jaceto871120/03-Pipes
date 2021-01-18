import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ocultarString'
})
export class OcultarStringPipe implements PipeTransform {

  transform(value: string, mostrar: boolean = false ): string {
    return ( mostrar ) ? '*'.repeat(value.length) : value;
  }

}
