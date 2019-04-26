import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountDataBoxComponent } from './account-data-box.component';

describe('AccountDataBoxComponent', () => {
  let component: AccountDataBoxComponent;
  let fixture: ComponentFixture<AccountDataBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountDataBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountDataBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
