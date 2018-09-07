import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedSocialLoginComponent } from './red-social-login.component';

describe('RedSocialLoginComponent', () => {
  let component: RedSocialLoginComponent;
  let fixture: ComponentFixture<RedSocialLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedSocialLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedSocialLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
