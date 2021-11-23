import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutCompComponent } from './layout-comp.component';

describe('LayoutCompComponent', () => {
  let component: LayoutCompComponent;
  let fixture: ComponentFixture<LayoutCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
