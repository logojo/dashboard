import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterModule } from '@angular/router';

@Component({
  selector:'app-side-menu',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './side-menu.component.html',
  styles: ``
})
export class SideMenuComponent {

  public menuItems = routes
  .map( route => route.children ?? [] )
  .flat() // función para aplanar arreglos (fusionar)
  .filter( route => route && route.path)
  .filter( route => !route.path?.includes(':'))
  
  constructor() { }
}
