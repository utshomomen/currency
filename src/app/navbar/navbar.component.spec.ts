import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { By } from '@angular/platform-browser';

// describe('NavbarComponent', () => {
//   let component: NavbarComponent;
//   let fixture: ComponentFixture<NavbarComponent>;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [NavbarComponent]
//     });
//     fixture = TestBed.createComponent(NavbarComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });


 
// });

describe('NavbarComponent', () => {

  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent] 
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have brand input', () => {
    const brandElement = fixture.debugElement.query(By.css('.navbar-brand'));
    component.brand = 'Test Brand';
    
    fixture.detectChanges();

    expect(brandElement.nativeElement.textContent).toContain('Test Brand');
  });

  it('should toggle nav on button click', () => {
    const button = fixture.debugElement.query(By.css('button'));
    const links = fixture.debugElement.queryAll(By.css('.navbar-nav li'));

    // assert links not visible initially
    expect(links.every(item => item.classes['d-none'])).toBeTrue();

    // click button
    button.triggerEventHandler('click', null);
    fixture.detectChanges();

    // assert links are visible
    expect(links.every(item => !item.classes['d-none'])).toBeTrue(); 
  });
  

  it('should have brand input', () => {

    component.brand = 'Test Brand';
    
    // ... query brandElement and assert
    
  });
});
