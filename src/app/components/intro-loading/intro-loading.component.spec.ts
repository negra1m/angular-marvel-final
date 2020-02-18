import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroLoadingComponent } from './intro-loading.component';

describe('IntroLoadingComponent', () => {
  let component: IntroLoadingComponent;
  let fixture: ComponentFixture<IntroLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroLoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
