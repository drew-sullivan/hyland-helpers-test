import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClapsComponent } from './claps.component';

describe('ClapsComponent', () => {
  let component: ClapsComponent;
  let fixture: ComponentFixture<ClapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
