import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnologyCardComponent } from './tecnology-card.component';

describe('TecnologyCardComponent', () => {
  let component: TecnologyCardComponent;
  let fixture: ComponentFixture<TecnologyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TecnologyCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TecnologyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
