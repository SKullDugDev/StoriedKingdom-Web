import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home-unauthorized',
  templateUrl: './home-unauthorized.component.html',
  styleUrls: ['./home-unauthorized.component.css'],
})
export class HomeUnauthorizedComponent implements AfterViewInit {
  @ViewChild('button') button: ElementRef = {} as ElementRef;
  @ViewChild('purpleDiscordLogo') purpleDiscordLogo: ElementRef = {} as ElementRef;

  ngAfterViewInit(): void {
    // we get the value as px but want it as rem
    let buttonHeight: string = `${this.button.nativeElement.offsetHeight / 10}rem`;

    this.purpleDiscordLogo.nativeElement.style.setProperty('height', buttonHeight);
    

  }
}
