import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAuthorizedComponent } from './home-authorized.component';

describe('HomeAuthorizedComponent', () => {
  let component: HomeAuthorizedComponent;
  let fixture: ComponentFixture<HomeAuthorizedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAuthorizedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeAuthorizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
