import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllmessageComponent } from './allmessage.component';

describe('AllmessageComponent', () => {
  let component: AllmessageComponent;
  let fixture: ComponentFixture<AllmessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllmessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
