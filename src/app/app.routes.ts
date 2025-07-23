import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: ()=> {
            return import('./components/transaction/transaction.component').then((m) => m.TransactionComponent);
        },
    },
    {
        path: 'balance',
        loadComponent: ()=> {
            return import('./components/balance/balance.component').then((m) => m.BalanceComponent);
        },
    },
    {
        path: 'saving',
        loadComponent: ()=> {
            return import('./components/saving/saving.component').then((m) => m.SavingComponent);
        },
    },
];
