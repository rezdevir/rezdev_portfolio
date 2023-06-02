import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPicShapeComponent } from './about-pic-shape.component';

describe('AboutPicShapeComponent', () => {
  let component: AboutPicShapeComponent;
  let fixture: ComponentFixture<AboutPicShapeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutPicShapeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutPicShapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
