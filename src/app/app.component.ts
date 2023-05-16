import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  host: {'class': 'flex-component'}
})
export class AppComponent {
  title: string = 'Storied Kingdom';
}
