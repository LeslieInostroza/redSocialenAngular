import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginGoogleFacebookComponent } from './login-google-facebook.component';

describe('LoginGoogleFacebookComponent', () => {
  let component: LoginGoogleFacebookComponent;
  let fixture: ComponentFixture<LoginGoogleFacebookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginGoogleFacebookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginGoogleFacebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
