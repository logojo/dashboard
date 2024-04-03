import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector:'app-change-detection',
  standalone: true,
  imports: [CommonModule,TitleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <app-title [title]="currentFramework()"/>

  <pre>{{ frameworkAsSignal() | json }}</pre>
  <pre>{{ frameworkAsProperty | json }}</pre>
  `,
  styles: ``
})
export default class ChangeDetectionComponent {

 public currentFramework = computed(() => `Change detection - ${this.frameworkAsSignal().name}` )

 public frameworkAsSignal = signal({
  name: 'Angular',
  releaseDate: 2016
 })

 public frameworkAsProperty = {
  name: 'Angular',
  releaseDate: 2016
 }

 constructor() {
  setTimeout(() => {
    //this.frameworkAsProperty.name = 'react'
    this.frameworkAsSignal.update( value => ({
      ...value,
      name: 'React'
    }))
    
  }, 3000)
 }

}
