import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerpageBannerComponent } from './innerpage-banner.component';

describe('InnerpageBannerComponent', () => {
  let component: InnerpageBannerComponent;
  let fixture: ComponentFixture<InnerpageBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnerpageBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerpageBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
