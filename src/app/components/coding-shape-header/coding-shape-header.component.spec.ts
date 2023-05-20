import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodingShapeHeaderComponent } from './coding-shape-header.component';

describe('CodingShapeHeaderComponent', () => {
  let component: CodingShapeHeaderComponent;
  let fixture: ComponentFixture<CodingShapeHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodingShapeHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodingShapeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
