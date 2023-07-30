import { ComponentFixture, TestBed } from '@angular/core/testing';


import { ConverterComponent } from './converter.component';

describe('ConverterComponent', () => {
  let component: ConverterComponent;
  let fixture: ComponentFixture<ConverterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConverterComponent]
    });
    fixture = TestBed.createComponent(ConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



  it('should set active currencies', () => {
   
    // assert initial value
    expect(component.activeCurrencies).toEqual(['USD', 'EUR', 'GBP']);

    // act - set new currencies
    component.activeCurrencies = ['USD', 'JPY'];

    // assert value was updated
    expect(component.activeCurrencies).toEqual(['USD', 'JPY']);

  });

  it('should call loadCurrencies when setting active', () => {

    // spy on loadCurrencies 
    const loadSpy = jest.spyOn(component, 'addCurrency');

    // act - set active currencies
    component.activeCurrencies = ['USD', 'JPY'];

    // assert loadCurrencies called
    expect(loadSpy).toHaveBeenCalled();

  });


});




