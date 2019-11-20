import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFuncComponent } from './list-func.component';

describe('ListFuncComponent', () => {
  let component: ListFuncComponent;
  let fixture: ComponentFixture<ListFuncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFuncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFuncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
