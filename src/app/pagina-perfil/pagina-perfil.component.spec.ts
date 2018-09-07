import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaPerfilComponent } from './pagina-perfil.component';

describe('PaginaPerfilComponent', () => {
  let component: PaginaPerfilComponent;
  let fixture: ComponentFixture<PaginaPerfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaPerfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
