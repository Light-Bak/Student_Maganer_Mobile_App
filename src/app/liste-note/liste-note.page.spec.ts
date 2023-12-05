import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListeNotePage } from './liste-note.page';

describe('ListeNotePage', () => {
  let component: ListeNotePage;
  let fixture: ComponentFixture<ListeNotePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListeNotePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
