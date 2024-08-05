import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglecomponentComponent } from './singlecomponent.component';

describe('SinglecomponentComponent', () => {
  let component: SinglecomponentComponent;
  let fixture: ComponentFixture<SinglecomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SinglecomponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SinglecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
