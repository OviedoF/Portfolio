import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureColumnsComponent } from './picture-columns.component';

describe('PictureColumnsComponent', () => {
  let component: PictureColumnsComponent;
  let fixture: ComponentFixture<PictureColumnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PictureColumnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
