import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  host: {'class': 'flex-component'}
})
export class HomeComponent {
  @Input() public isUserLoggedIn: boolean = true;
}
