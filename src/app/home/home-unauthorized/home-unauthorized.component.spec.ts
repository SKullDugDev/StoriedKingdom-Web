import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeUnauthorizedComponent } from './home-unauthorized.component';

describe('HomeUnauthorizedComponent', () => {
  let component: HomeUnauthorizedComponent;
  let fixture: ComponentFixture<HomeUnauthorizedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeUnauthorizedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeUnauthorizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
