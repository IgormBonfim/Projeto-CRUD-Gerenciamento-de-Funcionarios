import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoverCargoComponent } from './remover-cargo.component';

describe('RemoverCargoComponent', () => {
  let component: RemoverCargoComponent;
  let fixture: ComponentFixture<RemoverCargoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoverCargoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoverCargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
