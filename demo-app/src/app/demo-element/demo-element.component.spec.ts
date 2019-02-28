import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoElementComponent } from './demo-element.component';

describe('DemoElementComponent', () => {
  let component: DemoElementComponent;
  let fixture: ComponentFixture<DemoElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
