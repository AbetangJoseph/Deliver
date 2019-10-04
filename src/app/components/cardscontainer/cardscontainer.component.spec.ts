import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardscontainerComponent } from './cardscontainer.component';

describe('CardscontainerComponent', () => {
  let component: CardscontainerComponent;
  let fixture: ComponentFixture<CardscontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardscontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardscontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
