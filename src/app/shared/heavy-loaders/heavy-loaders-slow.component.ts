import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector:'app-heavy-loader-slow',
  standalone: true,
  imports: [CommonModule, ],
  template: `
    <section [ngClass]="['w-full h-[600px]', cssClass]">
      Heavy loaders componen
    </section>
  `
})
export class HeavyLoadersSlowComponent {

  @Input({ required: true}) cssClass!: string;

   constructor() {
    console.log('Heavy loaders component');
    const start = Date.now();

    while ( Date.now() - start < 5000 ){

    }
    
   }
}
