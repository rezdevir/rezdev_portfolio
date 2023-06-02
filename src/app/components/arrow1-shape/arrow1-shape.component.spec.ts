import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Arrow1ShapeComponent } from './arrow1-shape.component';

describe('Arrow1ShapeComponent', () => {
  let component: Arrow1ShapeComponent;
  let fixture: ComponentFixture<Arrow1ShapeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Arrow1ShapeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Arrow1ShapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
