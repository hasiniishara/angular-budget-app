import { Component } from '@angular/core';
import { BudgetService } from '../../services/budget-service.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrl: './balance.component.css',
  imports: [FormsModule]
})
export class BalanceComponent {
  transferAmount: number = 0;

  constructor(public budgetService: BudgetService,private router: Router) {}

  transferToSavings() {
    this.budgetService.transferToSavings(this.transferAmount);
    this.transferAmount = 0;
  }

  transferFromSavings() {
    this.budgetService.transferFromSavings(this.transferAmount);
    this.transferAmount = 0;
  }

  goToSavings() {
    this.router.navigate(['/saving']);
  }

  goToTransaction() {
    this.router.navigate(['/']);
  }
}
