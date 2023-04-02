import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiginComponent } from "./SiginComponent";

describe('SiginComponent', () => {
  let component: SiginComponent;
  let fixture: ComponentFixture<SiginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
