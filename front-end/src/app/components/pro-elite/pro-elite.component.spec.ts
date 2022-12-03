import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProEliteComponent } from './pro-elite.component';

describe('ProEliteComponent', () => {
  let component: ProEliteComponent;
  let fixture: ComponentFixture<ProEliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProEliteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProEliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
