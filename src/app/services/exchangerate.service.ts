import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ExchangeRatesResponse } from './payloads/exchange-rates-response';
import {combineLatest, Observable} from 'rxjs';
import {Currency} from '../types/currency';

@Injectable({
  providedIn: 'root'
})


export class CurrencyExchangeService {

  constructor(private http: HttpClient) {
  }

  getRates(currencies: Currency[]): Observable<ExchangeRatesResponse[]> {
    return combineLatest(
      currencies.map((currency) =>
        this.http.get<ExchangeRatesResponse>(`https://api.exchangerate.host/latest?base=${currency}`))
    );
  }
}
