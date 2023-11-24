import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadossComponent } from './dadoss.component';

describe('DadossComponent', () => {
  let component: DadossComponent;
  let fixture: ComponentFixture<DadossComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DadossComponent]
    });
    fixture = TestBed.createComponent(DadossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
