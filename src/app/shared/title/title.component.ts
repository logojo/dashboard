import { Component, Input, booleanAttribute } from '@angular/core';

@Component({
  selector:'app-title',
  standalone: true,
  imports: [],
  template: `
     <h1 class="text-3xl my-3 text-center">{{ title }} - {{ withShadow }}</h1>
  `
})
export class TitleComponent {
 @Input({ required: true}) title! : string;

//  booleanAttribute toma por defecto el valor asignado en caso de que no se mande el atributo
 @Input({ transform: booleanAttribute}) withShadow : boolean = false;
}
