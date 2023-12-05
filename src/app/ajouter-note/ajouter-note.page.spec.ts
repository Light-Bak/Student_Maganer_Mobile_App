import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AjouterNotePage } from './ajouter-note.page';

describe('AjouterNotePage', () => {
  let component: AjouterNotePage;
  let fixture: ComponentFixture<AjouterNotePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AjouterNotePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
