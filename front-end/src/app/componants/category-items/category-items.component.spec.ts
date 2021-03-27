import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryItemsComponent } from './category-items.component';

describe('CategoryItemsComponent', () => {
  let component: CategoryItemsComponent;
  let fixture: ComponentFixture<CategoryItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
