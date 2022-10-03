import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroAsideComponent } from './hero-aside.component';

describe('HeroAsideComponent', () => {
  let component: HeroAsideComponent;
  let fixture: ComponentFixture<HeroAsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroAsideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
