import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgCaracteresComponent } from './img-caracteres.component';

describe('ImgCaracteresComponent', () => {
  let component: ImgCaracteresComponent;
  let fixture: ComponentFixture<ImgCaracteresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImgCaracteresComponent]
    });
    fixture = TestBed.createComponent(ImgCaracteresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
