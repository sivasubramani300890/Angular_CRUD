import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEpgComponent } from './add-epg.component';

describe('AddEpgComponent', () => {
  let component: AddEpgComponent;
  let fixture: ComponentFixture<AddEpgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEpgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEpgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
