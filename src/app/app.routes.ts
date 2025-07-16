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
        path: 'signal/normal-cd',
        loadComponent: () => import('./non-signal/parent.component').then(m => m.ParentComponent)
    },
    {
        path: 'local-cd',
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
