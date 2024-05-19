import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTelInputComponent } from './my-tel-input.component';

describe('MyTelInputComponent', () => {
  let component: MyTelInputComponent;
  let fixture: ComponentFixture<MyTelInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyTelInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyTelInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
