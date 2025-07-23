import { Component } from '@angular/core';
import { BudgetService } from '../../services/budget-service.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-saving',
  templateUrl: './saving.component.html',
  styleUrl: './saving.component.css',
  imports: [FormsModule]
})
export class SavingComponent {
  savingTarget: number = 0;
  constructor(public budgetService: BudgetService, private router: Router) {}

  ngOnInit() {
    this.savingTarget = this.budgetService.savingTarget;
  }

  setTarget() {
    this.budgetService.setSavingTarget(this.savingTarget);
  }

  goToBalance() {
    this.router.navigate(['/balance']);
  }

  goToTransaction() {
    this.router.navigate(['/']);
  }
}
