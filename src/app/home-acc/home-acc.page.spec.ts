import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeAccPage } from './home-acc.page';

describe('HomeAccPage', () => {
  let component: HomeAccPage;
  let fixture: ComponentFixture<HomeAccPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HomeAccPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
