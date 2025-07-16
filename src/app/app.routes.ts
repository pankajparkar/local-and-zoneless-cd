import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'dashboard',
        loadComponent: () => import('./dashboard.component').then(m => m.DahboardComponent)
    },
    {
        path: 'when-default',
        loadComponent: () => import('./when-default.component').then(m => m.WhenDefaultComponent)
    },
    {
        path: 'when-onpush',
        loadComponent: () => import('./when-onpush.component').then(m => m.WhenOnPushComponent)
    },
    {
        path: 'non-signal/onpush',
        loadComponent: () => import('./non-signal/parent.component').then(m => m.ParentComponent)
    },
    {
        path: 'signal/onpush',
        loadComponent: () => import('./non-signal/parent.component').then(m => m.ParentComponent)
    },
    {
        path: 'signal/local-cd',
        loadComponent: () => import('./signal/parent.component').then(m => m.SignalParentComponent)
    },
    {
        path: 'parent',
        loadComponent: () => import('./non-signal/parent.component').then(m => m.ParentComponent)
    },
    {
        path: '**',
        redirectTo: 'dashboard',
    }
];
