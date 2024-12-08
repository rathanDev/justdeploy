import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoclistComponent } from './doclist.component';

describe('DoclistComponent', () => {
  let component: DoclistComponent;
  let fixture: ComponentFixture<DoclistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoclistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoclistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
