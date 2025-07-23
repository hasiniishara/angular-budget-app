import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class BudgetService {

  transactions: { amount: number; type: 'income' | 'expense' }[] = [];
  balance: number = 0;
  savings: number = 0;
  savingTarget: number = 0;

  constructor() {
    const savedTarget = localStorage.getItem('savingTarget');
    if (savedTarget !== null) {
      this.savingTarget = +savedTarget;
    }

    const savedSavings = localStorage.getItem('savings');
    if (savedSavings) {
      this.savings = +savedSavings;
    }

    const savedBalance = localStorage.getItem('balance');
    if (savedBalance) {
      this.balance = +savedBalance;
    }
  }

  addTransaction(amount: number, type: 'income' | 'expense') {
    this.transactions.push({ amount, type });
    if (type === 'income') {
      this.balance += amount;
    } else {
      this.balance -= amount;
    }
    localStorage.setItem('balance', this.balance.toString());
  }

  getTransactions() {
    return this.transactions;
  }

   getBalance() {
    return this.balance;
  }
  
  transferToSavings(amount: number) {
    if (this.balance >= amount) {
      this.balance -= amount;
      this.savings += amount;
      localStorage.setItem('savings', this.savings.toString());
      localStorage.setItem('balance', this.balance.toString());
    }
  }

  transferFromSavings(amount: number) {
    if (this.savings >= amount) {
      this.savings -= amount;
      this.balance += amount;
      localStorage.setItem('savings', this.savings.toString());
      localStorage.setItem('balance', this.balance.toString());
    }
  }

  setSavingTarget(target: number) {
    this.savingTarget = target;
    localStorage.setItem('savingTarget', target.toString());
  }

  getSavingsProgress() {
    return this.savingTarget ? (this.savings / this.savingTarget) * 100 : 0;
  }
}
