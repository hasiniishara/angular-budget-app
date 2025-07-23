import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BalanceComponent } from './components/balance/balance.component';
import { SavingComponent } from './components/saving/saving.component';
import { TransactionComponent } from './components/transaction/transaction.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-budget-app';
}
