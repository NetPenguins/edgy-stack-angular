import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSubtitleComponent } from './hero-subtitle.component';

describe('HeroSubtitleComponent', () => {
  let component: HeroSubtitleComponent;
  let fixture: ComponentFixture<HeroSubtitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroSubtitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroSubtitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
