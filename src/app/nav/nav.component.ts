import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements AfterViewInit {
  navLinksHeight: number = 0;
  isNavShown: boolean = false;

  maxHeight: string = `${this.navLinksHeight}rem`;

  @ViewChild('navLinks') navLinks: ElementRef = {} as ElementRef;

  toggleNavMenu(): void {
    this.isNavShown = !this.isNavShown;
    this.isNavShown ? this.navLinks.nativeElement.style.setProperty('max-height', this.maxHeight) : this.navLinks.nativeElement.style.removeProperty('max-height');
  }

  ngAfterViewInit() {
    this.navLinksHeight = this.navLinks.nativeElement.scrollHeight / 10;
    this.maxHeight = `${this.navLinksHeight}rem`;
  }
}
