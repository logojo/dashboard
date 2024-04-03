import { Component, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

type Grade = 'A'|'B'|'C'

@Component({
  selector:'app-control-flow',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './control-flow.component.html',
  styles: ``
})
export default class ControlFlowComponent {
  public showContent = signal(false)
  public grade = signal<Grade>('A')
  public frameworks = signal(['Angular', 'Vue', 'Svelte', 'Qwik','React']);
  public frameworks2 = signal(['Angular']);

  public toggleContent() {
    this.showContent.update( value => !value )
  }

  public changeGrade() {
    this.grade.set('B')
  }
}
