import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaMuroComponent } from './pagina-muro.component';

describe('PaginaMuroComponent', () => {
  let component: PaginaMuroComponent;
  let fixture: ComponentFixture<PaginaMuroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaMuroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaMuroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
