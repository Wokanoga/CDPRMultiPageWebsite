import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Witcher3Component } from './witcher3.component';

describe('Witcher3Component', () => {
  let component: Witcher3Component;
  let fixture: ComponentFixture<Witcher3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Witcher3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Witcher3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
