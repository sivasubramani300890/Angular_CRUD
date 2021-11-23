import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEpgComponent } from './list-epg.component';

describe('ListEpgComponent', () => {
  let component: ListEpgComponent;
  let fixture: ComponentFixture<ListEpgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEpgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEpgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
