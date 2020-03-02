import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetasListComponent } from './recetas-list.component';

describe('RecetasListComponent', () => {
  let component: RecetasListComponent;
  let fixture: ComponentFixture<RecetasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
