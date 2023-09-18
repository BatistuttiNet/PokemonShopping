import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicLayaoutComponent } from './public-layaout.component';

describe('PublicLayaoutComponent', () => {
  let component: PublicLayaoutComponent;
  let fixture: ComponentFixture<PublicLayaoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicLayaoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicLayaoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
