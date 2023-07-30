import {Currency} from '../../types/currency';

export interface ExchangeRatesResponse {
  rates: Record<Currency, number>,

  base: Currency,
  date: string
}
