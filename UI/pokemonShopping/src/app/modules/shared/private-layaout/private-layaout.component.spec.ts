import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateLayaoutComponent } from './private-layaout.component';

describe('PrivateLayaoutComponent', () => {
  let component: PrivateLayaoutComponent;
  let fixture: ComponentFixture<PrivateLayaoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateLayaoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateLayaoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
