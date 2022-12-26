import { Directive, ElementRef } from '@angular/core';

// modificar el comportamiento por defecto de un elemento HTML

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element: ElementRef) { //los parametros son Servicios / inyeccion de dependencias / singleton
    this.element.nativeElement.style.backgroundColor = 'yellow';
  }

}
