import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucessDialogComponent } from './sucess-dialog.component';

describe('SucessDialogComponent', () => {
  let component: SucessDialogComponent;
  let fixture: ComponentFixture<SucessDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SucessDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SucessDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
