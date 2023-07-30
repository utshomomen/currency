import type {OnInit} from '@angular/core';
import {Component} from '@angular/core';
import {CurrencyExchangeService} from '../services/exchangerate.service';
import type {Currency} from '../types/currency';
import type {Observable} from 'rxjs';
import { map } from 'rxjs';


@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {
  private readonly primeCurrency: Currency = 'RUB';

  private _activeCurrencies: Currency[] = ['USD', 'EUR', 'GBP'];
  set activeCurrencies(value: Currency[]) {
    this._activeCurrencies = value;
    this.loadCurrencies();
  }
  get activeCurrencies(): Currency[] {
    return this._activeCurrencies;
  }

  private readonly allCurrencies: Currency[] = ['USD', 'EUR', 'GBP', 'CNY', 'JPY', 'TRY'];

  data$?: Observable<{
    primeCurrency: Currency;
    rates: {
      currency: Currency;
      rate: number;
    }[];
    updatedAt: number;
    availableCurrencies: Currency[];
    prevRates: Partial<Record<Currency, number>>;
  }>;

  constructor(private service: CurrencyExchangeService) {
  }

  ngOnInit(): void {
    this.loadCurrencies();
  }

  private loadCurrencies() {
    const data$ = this.service.getRates(this.activeCurrencies).pipe(
      map((responses) => {
        return {
          primeCurrency: this.primeCurrency,
          rates: responses.map((response) => ({
            currency: response.base,
            rate: response.rates[this.primeCurrency],
          })),
          updatedAt: Date.now(),
          availableCurrencies: this.allCurrencies.filter((cur) => !this.activeCurrencies.includes(cur)),
          prevRates: {},
        };
      }),
    );

    this.data$ = data$;
  }

  addCurrency(currency: Currency) {
    this.activeCurrencies = [
      ...this.activeCurrencies,
      currency,
    ];
  }
}
