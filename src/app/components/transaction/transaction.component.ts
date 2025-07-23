import { Component } from '@angular/core';
import { BudgetService } from '../../services/budget-service.service';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css'],
  imports: [FormsModule, NgFor]
})
export class TransactionComponent {
  amount: number = 0;
  type: 'income' | 'expense' = 'income';

  constructor(public budgetService: BudgetService,private router: Router) {}

  addTransaction() {
    if (this.amount > 0) {
      this.budgetService.addTransaction(this.amount, this.type);
      this.amount = 0;
    }
  }

  goToBalance() {
    this.router.navigate(['/balance']);
  }

  goToSavings() {
    this.router.navigate(['/saving']);
  }
}
