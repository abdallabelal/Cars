import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeArenterComponent } from './become-arenter.component';

describe('BecomeArenterComponent', () => {
  let component: BecomeArenterComponent;
  let fixture: ComponentFixture<BecomeArenterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BecomeArenterComponent]
    });
    fixture = TestBed.createComponent(BecomeArenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
