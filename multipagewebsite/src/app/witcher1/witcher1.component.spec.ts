import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Witcher1Component } from './witcher1.component';

describe('Witcher1Component', () => {
  let component: Witcher1Component;
  let fixture: ComponentFixture<Witcher1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Witcher1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Witcher1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
