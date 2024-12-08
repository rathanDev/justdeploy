import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocdetailComponent } from './docdetail.component';

describe('DocdetailComponent', () => {
  let component: DocdetailComponent;
  let fixture: ComponentFixture<DocdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocdetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
