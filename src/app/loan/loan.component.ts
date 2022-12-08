import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent  {
 

amount: any;  

rate: any;  

months: any;  

monthlyPayment: any; 


loanCalc(): any{

let rate = (this.rate * 0.01)/12;

  var x = rate * (1 + rate) ** this.months;
  var y = ((1+rate) ** this.months)-1;

  return this.monthlyPayment = "$" + (this.amount * (x/y)).toFixed(2);

  
}


}