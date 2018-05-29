import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectapiComponent } from './injectapi.component';

describe('InjectapiComponent', () => {
  let component: InjectapiComponent;
  let fixture: ComponentFixture<InjectapiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InjectapiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InjectapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
