import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CurrencyService } from './currency.service';
import { RatesParam } from './RatesParam';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent {
  @Input() amount = 100;
  @Output() onConvert: EventEmitter<number> = new EventEmitter();

  rates: Map<string, number> = new Map<string, number>();
  currencies: string[] = [];
  selectedCurrency = 'THB';
  rate: number;
  converted: number;

  constructor(private cs: CurrencyService) {}

  onNoClick(): void {}

  ngOnInit() {
    const rates = this.cs.getRates().subscribe((data) => {
      this.getCurrencies(data.rates);
      this.calculate();
    });
  }

  getCurrencies(rates: any) {
    Object.keys(rates).forEach((prop) => {
      this.currencies.push(prop);
      this.rates.set(prop, rates[prop]);
    });
  }

  calculate() {
    this.rate = this.rates.get(this.selectedCurrency);
    this.converted = this.amount / this.rate;
  }

  getRate(curr: string): number {
    const rate = this.rates.get(curr);
    return rate;
  }

  convert(): void {
    this.onConvert.emit(this.converted);
  }
}
