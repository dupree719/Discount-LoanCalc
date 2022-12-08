import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent {
  price=0;

  discount=0;

  priceAfterDiscount: any;

  discountCalc(): any {
    var actualDiscount = (this.discount / 100) * this.price;
    return  this.priceAfterDiscount = "$" + (Math.round((this.price - actualDiscount) * 100) / 100).toFixed(2);
  }

}