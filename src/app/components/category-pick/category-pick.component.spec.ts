import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryPickComponent } from './category-pick.component';

describe('CategoryPickComponent', () => {
  let component: CategoryPickComponent;
  let fixture: ComponentFixture<CategoryPickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryPickComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoryPickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
