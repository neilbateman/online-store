import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostplaceComponent } from './postplace.component';

describe('PostplaceComponent', () => {
  let component: PostplaceComponent;
  let fixture: ComponentFixture<PostplaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostplaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
