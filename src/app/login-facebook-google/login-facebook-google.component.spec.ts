import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFacebookGoogleComponent } from './login-facebook-google.component';

describe('LoginFacebookGoogleComponent', () => {
  let component: LoginFacebookGoogleComponent;
  let fixture: ComponentFixture<LoginFacebookGoogleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginFacebookGoogleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFacebookGoogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
