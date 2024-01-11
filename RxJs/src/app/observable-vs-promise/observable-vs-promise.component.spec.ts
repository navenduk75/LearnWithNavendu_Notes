import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableVsPromiseComponent } from './observable-vs-promise.component';

describe('ObservableVsPromiseComponent', () => {
  let component: ObservableVsPromiseComponent;
  let fixture: ComponentFixture<ObservableVsPromiseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObservableVsPromiseComponent],
    });
    fixture = TestBed.createComponent(ObservableVsPromiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
