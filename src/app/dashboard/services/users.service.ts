import { Injectable, computed, inject, signal } from '@angular/core';
import { User, UserResponse } from '../interfaces/req-response';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs';


interface State {
  users   : User[];
  loading : boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private http = inject( HttpClient )

  // el signo numeral "#" es como si declaramos una variable privada
  #state = signal<State>({
     loading : true,
    users: []
  })

  public users = computed( () => this.#state().users )
  public loading = computed( () => this.#state().loading )

  constructor() { 
    console.log('cargando data');
    this.http.get<UserResponse>('https://reqres.in/api/users')
        .pipe( delay(1500) )
        .subscribe( ( res ) => {
              this.#state.set({
                loading: false,
                users: res.data
              })
        })
    
  }
}
