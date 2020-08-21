import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoyComponent } from './decoy.component';

describe('DecoyComponent', () => {
  let component: DecoyComponent;
  let fixture: ComponentFixture<DecoyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecoyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
