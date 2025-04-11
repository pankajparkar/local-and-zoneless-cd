import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'when',
        loadComponent: () => import('./when.component').then(m => m.WhenComponent)
    },
];
