import { Component } from '@angular/core';

interface Navigation {
  link: string,
  exact: boolean,
  name: string
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent {
  nav: Navigation[] = [
    {
      link: '/',
      exact: true,
      name: 'Home'
    },
    {
      link: '/random',
      exact: false,
      name: '404'
    }
  ]
}