import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecksearchComponent } from './decksearch.component';

describe('DecksearchComponent', () => {
  let component: DecksearchComponent;
  let fixture: ComponentFixture<DecksearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DecksearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DecksearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
