import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeActivationComponent } from './code-activation.component';

describe('CodeActivationComponent', () => {
  let component: CodeActivationComponent;
  let fixture: ComponentFixture<CodeActivationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeActivationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeActivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
