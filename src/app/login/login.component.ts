import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  host: {'class': 'flex-component'}
})
export class LoginComponent implements AfterViewInit {
  @ViewChild('purpleDiscordLogo') purpleDiscordLogo: ElementRef = {} as ElementRef;
  @ViewChild('loginText') loginText: ElementRef = {} as ElementRef;


  onLogin(): void {
    let clickedOnce: boolean = false;
    if (!clickedOnce) {

      this.purpleDiscordLogo.nativeElement.classList.add('logo-rotation');
      clickedOnce = true;
    }
  }


  ngAfterViewInit() {

    let doubleTextHeight: string = `${(this.loginText.nativeElement.offsetHeight / 10) * 2}rem`;
    this.purpleDiscordLogo.nativeElement.style.setProperty('height', doubleTextHeight);

  }

}
