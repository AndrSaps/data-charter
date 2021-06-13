import { Routes } from "@angular/router";

export const ROUTES: Routes = [
    {
        path: '',
        redirectTo: '/analysis',
        pathMatch: 'full'
    },
    {
        path: 'analysis',
        loadChildren: () => import('../modules/analysis/analysis.module').then(m => m.AnalysisModule),
    },
    {
        path: 'covid',
        loadChildren: () => import('../modules/covid/covid.module').then(m => m.CovidModule),
    },
]