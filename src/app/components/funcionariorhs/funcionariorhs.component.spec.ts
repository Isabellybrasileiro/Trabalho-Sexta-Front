import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionariorhsComponent } from './funcionariorhs.component';

describe('FuncionariorhsComponent', () => {
  let component: FuncionariorhsComponent;
  let fixture: ComponentFixture<FuncionariorhsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FuncionariorhsComponent]
    });
    fixture = TestBed.createComponent(FuncionariorhsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
